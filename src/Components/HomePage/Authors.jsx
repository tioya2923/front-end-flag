import React, { useState } from 'react';
import '../Styles/autores.css';


const Authors = ({ autores }) => {
    const [isActive, setIsActive] = useState(0);
    return (
        <div>
            <div className='all-autores'>
                <div className='autores-title'><h1 >List of Authors</h1></div>
                <div className='autores-wrapper'>
                    <div className='autores-border'>
                        {autores.map((autor, index) => {
                            return (
                                <div key={index} className={index === isActive
                                    ? "autor-card autor-card-active" : "autor-card"
                                }>

                                    <div className='autor-image'><img
                                        width="150px"
                                        height="150"

                                        style={{ borderRadius: 75 }}
                                        src={autor.foto} /></div>
                                    <div className='autor-name'><h3>{autor.name}</h3></div>
                                    <div className='autor-content'><h4>{autor.content}</h4></div>

                                    <div className='account'>
                                        <div className='autor-facebook'><img 
                                        width="25px"
                                        // height="50px"
                                        src={autor.facebook} /></div>
                                        <div className='autor-facebook'><img width="25px" src={autor.twitter} /></div>
                                        <div className='autor-facebook'><img width="25px" src={autor.inst} /></div>
                                        <div className='autor-facebook'><img width="25px" src={autor.linkedin} /></div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* <div className="category-arrow-left" onClick={sliderLeft}>&lsaquo;</div>
            <div className="category-arrow-right" onClick={sliderRight}>&rsaquo;</div> */}



            </div>
        </div>
    )
}

export default Authors;
