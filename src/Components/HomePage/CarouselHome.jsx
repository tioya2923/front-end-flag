import React, { useEffect, useState } from 'react';
import "../Styles/carousel.css";
// import ReadMore from '../ReadMore/ReadMoreLess';


const CarouselHome = ({ elements }) => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [isReadMore, setIsReadmore] = useState(false);
    const linkName = isReadMore ? 'fechar  ' : '  saber mais > ';

    // const openInNewTab = (url) => {
    //     window.open(url, '_blank', 'noreferrer');
    //   };


    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay &&
            setTimeout(() => {
                slideRight()
            }, 2500)
    });

    const slideRight = () => {
        setCurrent(current === elements.length - 1 ? 0 : current + 1)
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? elements.length - 1 : current - 1)

    };

    return (
        <div className='carousel' onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
        }}
            onMouseLeave={() => { setAutoPlay(true); }}
        >
            <div className='carousel-wrapper'>
                {elements.map((element, index) => {
                    return (
                        // Condition ? true : false
                        <div key={index} className={index === current
                            ? "carousel-card carousel-card-active" : "carousel-card"}>
                            <img className='card-image'
                                // width="100%"
                                // height="100%"
                                src={element.image} alt='' />

                            <div className='card-all-overlay'>
                                <div className='card-overlay'>
                                    <div className='card-posted'>
                                        <h3>{element.posted}</h3>
                                    </div>
                                    <div className='card-title'>
                                        <h2>{element.title}</h2>
                                    </div>
                                    <div className='inline'>
                                        <div className='post-by'>
                                            <h3 style={{ color: 'black' }}>By</h3>
                                        </div>
                                        <div className='inline card-by'>
                                            <h3>{element.by}</h3>
                                        </div>
                                        <div className='inline line'>

                                        </div>
                                        <div className='inline card-date'>
                                            <h3>{element.date}</h3>
                                        </div>
                                    </div>
                                    <div className='card-desc'>
                                        {element.desc}

                                    </div>
                                    <div className='read-more'>

                                        <a className='card-read-more text-read-more-active' onClick={() => { setIsReadmore(!isReadMore) }} ><h2>{linkName}</h2></a>

                                    </div>

                                    <div className='text-read-more'><h3>
                                        {isReadMore && element.read}
                                    </h3></div>

                                </div>
                            </div>

                        </div>




                    )
                })}
                <div className="carousel-arrow-left" onClick={slideLeft}>&lsaquo;</div>
                <div className="carousel-arrow-right" onClick={slideRight}>&rsaquo;</div>

                <div className="carousel-pagination">
                    {elements.map((_, index) => {
                        return (
                            <div key={index}
                                className={index === current
                                    ? "pagination-dot pagination-dot-active" : "pagination-dot"}
                                onClick={() => setCurrent(index)}
                            >

                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default CarouselHome;


