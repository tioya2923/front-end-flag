import React from 'react';
import '../Styles/home.css';
import CarouselHome from '../HomePage/CarouselHome';
import Post from '../HomePage/Post';
import items from '../HomePage/HomePageData';
import lists from '../HomePage/PostList';
//import PostPage from './PostPage';




const Home = () => {
  return (
    <div>     
      <CarouselHome 
      elements={items}
      
      />
      
      <Post
      posts={lists}
      />
    {/* <PostPage></PostPage> */}
    </div>
  );
}

export default Home
