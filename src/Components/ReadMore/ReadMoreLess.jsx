import React, { useState } from 'react'
import '../Styles/buttonReadMore.css';
//import data from '../HomePage/HomePageData';

const ReadMoreLess = () => {
    
    const [isReadMore, setIsReadmore] = useState(false);
    const linkName=isReadMore? 'Read Less  ':' Read More  '
    
    return (
       <div className='read-or-hide'>
        <a className='read-more-link' onClick={() => {setIsReadmore(!isReadMore)}}><h2>{linkName}</h2></a>
       </div>
    );
};

export default ReadMoreLess