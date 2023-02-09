import React from 'react';
import header from './Header.module.css'
import {HiOutlineChevronDown} from 'react-icons/hi'
const MainScreen = ({handleClickScroll, id}) => {
  return (
    <div id={id} className={header.container}>
        <h1 className={header.textTitle}>Chogori</h1>
        <h2 className={header.title}>K-2</h2>
        <h3 className={header.text}>The world’s second highest peak remains much more difficult and dangerous than Everest.</h3>
        <div className={header.iconDiv}>
        <HiOutlineChevronDown className={header.icon} onClick={() => handleClickScroll('sec')} />
        </div>
    </div>
  );
}

export default MainScreen;