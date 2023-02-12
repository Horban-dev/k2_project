/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from 'react';
import lin from './Links.module.css';
import {useScrollPosition, useOnHoverOutside} from '../../hooks';
import '../../App.css'
import { Link, NavLink } from 'react-router-dom';


const Links = ({handleClickScroll}) => {
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(false) 
    const dropdownRef = useRef(null); 
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  
    const closeHoverMenu = () => {
        setMenuDropDownOpen(false);
      };
    useOnHoverOutside(dropdownRef, closeHoverMenu);
    useScrollPosition( setVisible, setPosition, position)

  const cls = visible ? "visible" : "hidden";
  
    return (
        <>
        <header className={cls}>
            <button onClick={() => handleClickScroll('home')}  className={lin.link} href='/home'>
                <span>Home</span>
            </button>
            <button onClick={() => handleClickScroll('sec')} className={lin.link}>History</button>
            <button onClick={() => handleClickScroll('slide')} className={lin.link}>Photos</button>
            <div className={lin.dropdown} ref={dropdownRef}>
            <button onClick={() => handleClickScroll('nimsdai')} className={lin.link} onMouseOver={() => setMenuDropDownOpen(true)}><span>Nimsdai</span>
            {
            isMenuDropDownOpen 
            && 
            <div className={lin.drop}>
                <ul>
                <li className={lin.dropdownContent}><NavLink  to='/trailer'>Youtube</NavLink></li>
                <li className={lin.dropdownContent}><NavLink  to='/articles'>Articles</NavLink></li>
                </ul>
            </div>
            } 
            </button>
            </div>
            <button onClick={() => handleClickScroll('footer')} className={lin.link} href='#'>links</button>
    </header>
   
    </>
    );
};

export default Links;