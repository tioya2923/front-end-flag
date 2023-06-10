import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../Styles/postBlog.css';
import Paginate from './Paginate';

const BlogPost = ({ blogs }) => {

    const [isBlog, setIsBlog] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
		setCurrentPage(selected + 1);
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
                                        <NavLink className='read-more-blog' to={'/blog/' + blog.blogId}>
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
                    {blogs.map((bl, index) => {
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

                <Paginate
						onPageChange={paginate}
						pageCount={Math.ceil(isBlog.length / postsPerPage)}
						previousLabel={'Prev'}
						nextLabel={'Next'}
						containerClassName={'pagination'}
						pageLinkClassName={'page-number'}
						previousLinkClassName={'page-number'}
						nextLinkClassName={'page-number'}
						activeLinkClassName={'active'}
					/>
                


            </div>


          



        </div>
    )
}

export default BlogPost
