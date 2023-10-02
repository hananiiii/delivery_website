import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ textColor }) => {
  return (
    <Link to='/Home'>
      <div className={`flex gap-3 font-font font-semibold items-center cursor-pointer text-${textColor}`}>
        <span className='text-3xl text-center'>
          <ion-icon name="send-outline"></ion-icon>
        </span>
        <h1 className='text-2xl text-center'>RushSend</h1>
      </div>
    </Link>
  );
}

export default Logo;
