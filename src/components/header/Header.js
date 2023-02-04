import React from 'react';
import header from './Header.module.css'
import {HiOutlineChevronDown} from 'react-icons/hi'
const Header = ({handleClickScroll}) => {
  return (
    <div className={header.container}>
        <div className={header.links}>
            <a href='#'>Home</a>
            <a href='#'>History 🏔</a>
            <a href='#'>First conquest</a>
            <a href='#'>Nowdays</a>
            <a href='#'>Photos</a>
            <a href='#'>Videos</a>
            <a href='#'>links</a>
        </div>
        
        <h1 className={header.textTitle}>Chogori</h1>
        <h2 className={header.title}>K-2</h2>
        <h3 className={header.text}>The world’s second highest peak remains much more difficult and dangerous than Everest.</h3>
        <div className={header.iconDiv}>
        <HiOutlineChevronDown className={header.icon} onClick={handleClickScroll} />
        </div>
    </div>
  );
}

export default Header;