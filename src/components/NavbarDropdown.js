import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-black'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-2'>
        Home
      </Link>
      <Link to='/menu' className='p-2'>
        About
      </Link>
      <Link to='/about' className='p-2'>
        Skills
      </Link>
      <Link to='/contact' className='p-2'>
        Experience
      </Link>
      <Link to='/contact' className='p-2'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;