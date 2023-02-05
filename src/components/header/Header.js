import React from 'react';
import header from './Header.module.css'
import {HiOutlineChevronDown} from 'react-icons/hi'
const Header = ({handleClickScroll}) => {
  return (
    <div className={header.container}>
        <div className={header.links}>
            <a className={header.link} href='#'>Home</a>
            <a className={header.link} href='#'>History 🏔</a>
            <a className={header.link} href='#'>First conquest</a>
            <a className={header.link} href='#'>Nowdays</a>
            <a className={header.link} href='#'>Photos</a>
            <a className={header.link} href='#'>Videos</a>
            <a className={header.link} href='#'>links</a>
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