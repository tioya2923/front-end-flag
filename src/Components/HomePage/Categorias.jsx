import React, { useState } from 'react';
import '../Styles/category.css';



const Categorias = ({ category }) => {
    const [isActive, setIsActive] = useState(0);

    // const sliderRight = () => {
    //     setIsActive(isActive === category.length - 1 ? 0 : isActive + 1)
    // };

    // const sliderLeft = () => {
    //     setIsActive(isActive === 0 ? category.length - 1 : isActive - 1)

    // };

    return (
        <div className='all-categories'>
            <div className='title'><h1 >Choose A Catagory</h1></div>
            <div className='category-wrapper'>
                <div className='category-border'>
                    {category.map((categ, index) => {
                        return (
                            <div key={index} className={index === isActive
                                ? "category-card category-card-active" : "category-card"
                            }>
                                <div className='category-icon'><img src={categ.icon} /></div>

                                <div className='category-post'>
                                    <div className='category-title'><h2>{categ.title}</h2></div>
                                    <div className='category-desc'><h3>{categ.desc}</h3></div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

            



        </div>
    )
}

export default Categorias;
