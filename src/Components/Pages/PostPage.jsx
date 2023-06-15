import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../Pages/BlogList.json';


import '../Styles/postPage.css';


const PostPage = () => {

    const { type } = useParams();


    const initialValues = blogs.slice(0, 3);

    const [arrayToShow, setArrayToShow] = useState({ array: initialValues, allElements: blogs });

    const prevElement = () => {

        let newAllElements = [arrayToShow.allElements[arrayToShow.allElements.length - 1], ...arrayToShow.allElements];

        newAllElements.pop();
        setArrayToShow({ array: newAllElements.slice(0, 3), allElements: newAllElements });
    }

    const nextElement = () => {
        let newAllElements = [...arrayToShow.allElements]
        let value2Push = newAllElements[0];
        newAllElements.push(value2Push);
        newAllElements.shift();
        setArrayToShow({ array: newAllElements.slice(0, 3), allElements: newAllElements });
    }

    return (
        <div className='postPage-container'>


            {blogs.filter((post) => post.type === type).map((post, index) => (
                <div key={index}>
                    <div className="autor-postPage">
                        <div className="image-autorPostPage">
                            <img className='image-PostAutor'
                                width="150px"
                                height="150"
                                style={{ borderRadius: 75 }}
                                src={post.foto}
                            />
                        </div>
                        <div className="autoAll">
                            <div className="name-autorPage">
                                <h2>{post.name}</h2>
                            </div>
                            <div className="date-post">
                                <h2>Posted on {post.date}</h2>
                            </div>
                        </div>

                    </div>


                    <div className="largeTitle-postPage">
                        <h1>{post.largetitle}</h1>
                    </div>

                    <div className="category-postPage">
                        <div className="image-postPage">
                            <img
                                src={post.icon} />
                        </div>
                        <div className="titleIcon">
                            <h2>{post.titleIcon}</h2>
                        </div>
                    </div>

                    <img className='postPage-image'
                        width="100%"
                        height="70%"
                        src={post.image}
                    />
                    <div className='all-postPage'>
                        <div className='title1'><h2>{post.title1}</h2></div>
                        <div className='tema1'><h3>{post.tema1}</h3></div>
                        <div className='title2'><h2>{post.title2}</h2></div>
                        <div className='tema2'><h3>{post.tema2}</h3></div>
                        <div className='tema21'><h3>{post.tema21}</h3></div>

                        <div className="pontos">

                            <ul>

                                <li className='tema211'><h3>{post.tema211}</h3></li>
                                <li className='tema212'><h3>{post.tema212}</h3></li>
                                <li className='tema213'><h3>{post.tema213}</h3></li>
                            </ul>

                        </div>

                        <div className='tema21'><h3>{post.tema21}</h3></div>
                        <div className='title3'><h2>{post.title3}</h2></div>
                        <div className='tema3'><h3>{post.tema3}</h3></div>

                    </div>
                </div>
            ))}

            <div className='carroussel-postPage'>
                <div className="carrousel">

                    {arrayToShow.array.map((element) => (
                        <div className="slide-postPage">
                            <img className='image-pageCarrouseel'
                                width="90%"
                                height="50%"
                                src={element.image}
                            />


                            <div className='inline-postPage'>
                                <div className='postPage-by'>
                                    <h3 style={{ color: 'black' }}>By</h3>
                                </div>

                                <div className='inline-postPage postPage-by'>
                                    <h3> {element.by}</h3>
                                </div>
                                <div className='inline-postPage line-postPage'>
                                </div>
                                <div className='inline-postPage date-postPage'>
                                    <h3>{element.date}</h3>
                                </div>
                            </div>

                            <div className="postPage-title">
                                <h2>{element.readNext}</h2>

                            </div>
                            <div className="desc-postPage">
                                <h3>{element.desc}</h3>
                            </div>
                        </div>

                    ))
                    }

                </div>

            </div>
            <div className="nav-buttons">
                <input type="button" style={{ width: 100, fontSize: 30 }} value="prev" onClick={prevElement}></input>
                <input type="button" style={{ width: 100, fontSize: 30 }} value="next" onClick={nextElement}></input>
            </div>


        </div>

    );
}

export default PostPage;
