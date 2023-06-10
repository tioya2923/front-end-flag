// import React from 'react';

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import blogList from '../Pages/BlogList.json';
import BlogPost from './BlogPost';
import AllBlog from './AllBlog';
import { Link } from 'react-router-dom';



const Blog = () => {

  

  return (
    <div>
      
     <BlogPost blogs={blogList} />
    <AllBlog />

    
    </div>
  )
}

export default Blog
