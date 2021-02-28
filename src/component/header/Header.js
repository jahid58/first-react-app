import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className='nav'>
           <ul className='nav-item'>
               <li className="item">Home</li>
               <li className="item">Contact</li>
               <li className="item">User Information</li>
               <li className="item"> About </li>
               <li className="item"><input type="text" placeholder='search'/></li>
           </ul>
        
        </div>
    );
};

export default Header;