import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import posts from '../Records/RecordsData.json';
import '../Styles/featuredPost.css';


const Post = ({ posts }) => {
    const [isPost, setIsPost] = useState(0);



    return (

        <div className='all-posts'>
            <div className='post-wrapper'><h1>Postagem em destaque</h1>
                <div className='post-border'>
                    {posts.map((post, index) => {
                        return (
                            <div key={index} className={index === isPost
                                ? "post-card post-card-active" : "post-card"}>
                                <img className='post-image'
                                    // width="100%"
                                    // height="100%"
                                    src={post.image} />
                                <h4>{post.alt}</h4>
                                <div className='post-all-overlay'>
                                    <div className='post-overlay'>
                                        <div className='inline-post'>
                                            <div className='post-by'>
                                                <h3 style={{ color: 'black' }}>By</h3>
                                            </div>

                                            <div className='inline-post post-by'>
                                                <h3> {post.by}</h3>
                                            </div>
                                            <div className='inline-post line-post'>
                                            </div>
                                            <div className='inline-post date-post'>
                                                <h3>{post.date}</h3>
                                            </div>
                                        </div>
                                        <div className='post-about'>
                                            <h3>{post.about}</h3>
                                        </div>
                                        <div className='post-desc'>
                                            <h4>{post.desc}</h4>
                                        </div>
                                        <div className='post-read-more'>
                                            {/* <Link className='read-more-post' to={'/blog/' + post.blogId}>Read More</Link> */}
                                            <NavLink className='read-more-post' to={'/post/' + post.type}>
                                                Read More</NavLink>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='pagination-post'><h1>Todas as Publicações</h1>
                <div className='posts-pagination'>
                    {posts.map((page, index) => {
                        return (
                            <div key={index} className={index === isPost
                                ? "pagination-text pagination-text-active" : "pagination-text"

                            } onClick={() => setIsPost(index)}>
                                <div className='inline-post'>
                                    <div className='post-by'>
                                        <h3 style={{ color: 'black' }}>By</h3>
                                    </div>



                                    <div className='inline-post post-by'>
                                        <h3> {page.by}</h3>
                                    </div>
                                    <div className='inline-post line-post'>
                                    </div>
                                    <div className='inline-post date-post'>
                                        <h3>{page.date}</h3>
                                    </div>
                                </div>
                                <div ><h2>{page.largetitle}</h2></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='viewAll'>
                <NavLink><h2>View All</h2></NavLink>
            </div>
        </div>

    )
}

export default Post;