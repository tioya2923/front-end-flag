import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/join.css';

const JoinOur = () => {
  return (
    
      <div className='all-join'>
        <div className='join'><h2>Join our team to be a part of our story</h2></div>
        <div className='join-text'><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3></div>
        <Link><div className='link-join'><h2  className='text-link' >Join Now</h2></div></Link>
      </div>
      
    
  )
}

export default JoinOur
