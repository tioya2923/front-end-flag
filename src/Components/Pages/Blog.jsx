import blogList from '../Pages/BlogList.json';
import BlogPost from './BlogPost';





const Blog = () => {

  

  return (
    <div>
      
     <BlogPost blogs={blogList} />  
   
   </div>
  )
}

export default Blog;
