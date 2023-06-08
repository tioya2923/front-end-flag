import React from 'react';
import '../Styles/home.css';
import CarouselHome from '../HomePage/CarouselHome';
import Post from '../HomePage/Post';
import Tables from '../HomePage/Tables';
import Categorias from '../HomePage/Categorias';
import Passion from '../HomePage/Passion';
import Authors from '../HomePage/Authors';
import WeAre from '../HomePage/WeAre';
import Testimonial from '../HomePage/Testimonial';
import items from '../HomePage/HomePageData';
import lists from '../HomePage/PostList';
import categories from '../HomePage/ListCategorias.json';
import authors from '../HomePage/AuthorList.json';
import testimonials from '../HomePage/Testimoniales.json';
// import pasion from '../HomePage/PassionList';
// import tables from '../HomePage/TableList';
//import PostPage from './PostPage';




const Home = () => {
  return (
    <div>
      
      <CarouselHome
        elements={items} />
      <Post posts={lists} />
      <Tables/>
      <Categorias category={categories}/>
      <Passion />
      <Authors autores={authors} />
      <WeAre />
      <Testimonial testemunhos={testimonials} />
    </div>
  );
}

export default Home;
