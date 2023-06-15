import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/postBlog.css';

import category from '../HomePage/ListCategorias.json' 

const BlogPost = ({ blogs }) => {

    const [isBlog, setIsBlog] = useState(0);
    const [isActive, setIsActive] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }



    const pages = [];
    for (let i = 1; i <= Math.ceil(blogs.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstIem = indexOfLastItem - itemsPerPage;
    const currentItems = blogs.slice(indexOfFirstIem, indexOfLastItem)

    const renderPageNumbers = pages.map(number => {

        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li key={number} id={number} onClick={handleClick}
                    className={currentPage === number ? "active" : null}>
                    {number}
                </li>
            );
        } else {
            return null;
        }


    });

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    };

    const handlePrevbtn = () => {

        setCurrentPage(currentPage - 1);

        if ((currentPage - 1 )%pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }

    };

   



    return (
        <div className='all-blogs'>

            <div className='blog-wrapper'>
                <div className='blog-border'>
                    {blogs.map((blog, index) => {
                        return (
                            <div key={index} className={index === isBlog
                                ? "blog-card blog-card-active" : "blog-card"}>
                                <div className='blog-overlay'>
                                    <div className='inline-blog'>
                                        <div className='blog-title'><h2>{blog.title}</h2></div>
                                        <div className='blog-largetitle'><h2>{blog.largetitle}</h2></div>
                                        <div className='blogLine'>
                                            <div className='blog-by'>
                                                <h3 style={{ color: 'black' }}>By</h3>
                                            </div>
                                            <div className='blogLine blog-by'>
                                                <h3> {blog.by}</h3>
                                            </div>
                                            <div className='blogLine line-blog'>
                                            </div>
                                            <div className='blogLine date-blog'>
                                                <h3>{blog.date}</h3>
                                            </div>
                                        </div>
                                        <div className='blog-desc'><h3>{blog.desc}</h3> </div>
                                        <NavLink className='read-more-blog' to={'/blog/' + blog.type}>
                                            Read More</NavLink>

                                            
                                    </div>
                                    <div className='image-blog'>
                                        <img src={blog.image} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='pagination-blog'><h1>All posts</h1>

                <div className='blogs-pagination'>
                    {currentItems.map((bl, index) => {
                        return (

                            <div key={index} className={index === isBlog
                                ? "pagination-all pagination-all-active" : "pagination-all"

                            } onClick={() => setIsBlog(index)} >
                                <div className='pagination-overlay'>
                                    <div className='pagination-image'>
                                        <img
                                            width="90%"
                                            height="100%"
                                            src={bl.image} />
                                    </div>
                                    <div className='pagination-about'>
                                        <div className='pagination-type'><h2>{bl.type}</h2></div>
                                        <div className='pagination-largetitle'><h2>{bl.largetitle}</h2></div>
                                        <div className='pagination-desc'><h3>{bl.desc}</h3></div>
                                    </div>
                                </div>


                            </div>
                        )
                    })}

                </div>







            </div>



            <div>
                    <ul className="pageNumbers">
                        <li>
                            <button
                                onClick={handlePrevbtn}
                            >
                                Prev
                            </button>
                        </li>
                     
                        <li>
                            <button
                                onClick={handleNextbtn}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </div>

            <div className='all-categories'>
                <div className='title'><h1 >All Catagory</h1></div>
                <div className='category-wrapper'>
                    <div className='category-border'>
                        {category.map((categ, index) => {
                            return (
                                <div key={index} className={index === isActive
                                    ? "category-card category-card-active" : "category-card"
                                }>
                                    <div className='category-icon'><img src={categ.icon} /></div>

                                    <div className='category-post'>
                                        <div className='category-title'><h2>{categ.title}</h2></div>
                                        <div className='category-desc'><h3>{categ.desc}</h3></div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>





            </div>

        </div>
    )
}

export default BlogPost;
