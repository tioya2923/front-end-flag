import React, { useState } from 'react';
import '../Styles/testimoniales.css';

const Testimonial = ({ testemunhos }) => {
    const [isActive, setIsActive] = useState(0);


    const sliderRight = () => {
        setIsActive(isActive === testemunhos.length - 1 ? 0 : isActive + 1)
    };

    const sliderLeft = () => {
        setIsActive(isActive === 0 ? testemunhos.length - 1 : isActive - 1)

    };

    return (
        <div className='all-testemunho'>
            <div className='wrapper-testemunho'>
                <div className='testemunhas1'>
                    <div className='testemunho-title'><h2>testimonials</h2></div>
                    <div className='what-testemunho'><h2>What people say about our blog</h2></div>
                    <div className='desc-testemunho'><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3></div>
                </div>
                <div className='testemunhas'>
                    {testemunhos.map((testemunho, index) => {
                        return (
                            <div key={index} className={index === isActive
                                ? "testemunho-card testemunho-card-active" : "testemunho-card"
                            }>
                                <div className='testemunho'>
                                <div className='testemunho-text'><h3>{testemunho.testemunho}</h3></div>
                                    <div className='testemunho-person'>
                                        <img 
                                        width="100px"
                                        height="100"
                                        style={{ borderRadius: 75 }}
                                        src={testemunho.foto} />
                                    </div>
                                    <div className='testemunho-name'><h2>{testemunho.name}</h2></div>
                                    <div className='testemunho-city'><h2>{testemunho.city}</h2></div>
                                   
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="testemunhos-arrow-left" onClick={sliderLeft}>&lsaquo;</div>
            <div className="testemunhos-arrow-right" onClick={sliderRight}>&rsaquo;</div>

        </div>
    )
}

export default Testimonial;
