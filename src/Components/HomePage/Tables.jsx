import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/tables.css';

const Tables = () => {
    const [isActive, setIsActive] = useState(0);

    const clickListener = (eventArgs) => {
        let idTable = eventArgs.target.id;

        if (idTable === isActive) {
            setIsActive("");
        }
        setIsActive(idTable);
    }

    return (
        <div className='table'>
            <div className='table-wrapper'>
                <div className='table-container'>
                    <div id='tableOne' className={isActive} onClick={clickListener}></div>
                    <div id='tableTwo' className={isActive} onClick={clickListener}></div>
                    <div id='tableThree' className={isActive} onClick={clickListener}></div>
                </div>

                <div className='text-tables'>

                    {isActive === "tableOne" &&
                        <div className='about-us'><h2 className='text'>about us</h2>
                            <div className='text-one'><h3>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repudiandae </h3></div>
                            <div className='text-two'><h4>111Amet sed fuga sunt corrupti quasi numquam atque, quis labore, consequuntur illum sequi ex dignissimos mollitia obcaecati eveniet pariatur nulla ab. fuga sunt corrupti quasi numquam atque, quis labore, consequuntur illum sequi ex dignissimos mollitia obcaecati eveniet pariatur nulla </h4></div>
                        </div>
                    }


                    {isActive === "tableTwo" &&
                        <div className='about-us'><h2 className='text'>about us</h2>
                            <div className='text-one'><h3>22Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repudiandae </h3></div>
                            <div className='text-two'><h4>2Amet sed fuga sunt corrupti quasi numquam atque, quis labore, consequuntur illum sequi ex dignissimos mollitia obcaecati eveniet pariatur nulla ab.</h4></div>
                        </div>


                    }


                    {isActive === "tableThree" &&
                        <div className='about-us'><h2 className='text'>about us</h2>
                            <div className='text-one'><h3>33Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repudiandae </h3></div>
                            <div className='text-two'><h4>3Amet sed fuga sunt corrupti quasi numquam atque, quis labore, consequuntur illum sequi ex dignissimos mollitia obcaecati eveniet pariatur nulla ab.</h4></div>
                        </div>

                    }



                    {isActive === "tableOne" &&
                        <div className='our-mission'><h2 className='text'>our mission</h2>
                            <div className='text-one'><h3>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repudiandae </h3></div>
                            <div className='text-two'><h4>111Amet sed fuga sunt corrupti quasi numquam atque, quis labore, consequuntur illum sequi ex dignissimos mollitia obcaecati eveniet pariatur nulla ab.</h4></div>
                        </div>
                    }


                    {isActive === "tableTwo" &&
                        <div className='our-mission'><h2 className='text'>our mission</h2>
                            <div className='text-one'><h3>22Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repudiandae </h3></div>
                            <div className='text-two'><h4>2Amet sed fuga sunt corrupti quasi numquam atque, quis labore, consequuntur illum sequi ex dignissimos mollitia obcaecati eveniet pariatur nulla ab.</h4></div>
                        </div>


                    }


                    {isActive === "tableThree" &&
                        <div className='our-mission'><h2 className='text'>our mission</h2>
                            <div className='text-one'><h3>33Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repudiandae </h3></div>
                            <div className='text-two'><h4>m3Amet sed fuga sunt corrupti quasi numquam atque, quis labore, consequuntur illum sequi ex dignissimos mollitia obcaecati eveniet pariatur nulla ab.</h4></div>
                        </div>

                    }


                    <div className='table-read-more'>
                        <Link className='read-more-table'>Read More &gt;</Link>
                    </div>

                </div>



            </div>



        </div>
    )
}

export default Tables;
