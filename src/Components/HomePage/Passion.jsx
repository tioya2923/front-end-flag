import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/passion.css';

const Passion = () => {
  // const [isPassion, setIsPassion] = useState(0);

  return (
    <div className='all-passion'>


      <div className='passion'>
        <div className='passion foto-passion'>
          <img
            width="100%"
            height="100%"
            src='../assets/images/sol.jpg' />
        </div>

        <div className='passion overlay-passion'>
          <div className='overlay'>
            <div className='why-passion'><h2>Why we started </h2></div>
            <div className='title-passion'><h2>It started out as a simple idea and evolved into our passion</h2></div>
            <div className='desc-passion'><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</h3></div>
            <Link><div className='discover-passion'><h2>Discover our story &gt;</h2></div></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Passion;
