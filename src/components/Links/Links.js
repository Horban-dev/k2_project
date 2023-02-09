import React, { useEffect, useState, useRef } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import lin from './Links.module.css';
import {useScrollPosition, useOnHoverOutside} from '../../hooks';
import '../../App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Nimsdai from '../Nimsdai/Nimsdai';
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
            <button onClick={() => handleClickScroll('home')}  className={lin.link} href='#'>
                <span>Home</span>
            </button>
            <button onClick={() => handleClickScroll('sec')} className={lin.link}>History</button>
            <button onClick={() => handleClickScroll('slide')} className={lin.link}>Photos</button>
            <div className={lin.dropdown} ref={dropdownRef}>
            <button onClick={() => handleClickScroll('nimsdai')} className={lin.link} onMouseOver={() => setMenuDropDownOpen(true)}>Menu</button>
            {
            isMenuDropDownOpen 
            && 
            <div className={lin.drop}>
                <ul>
                <li className={lin.dropdownContent}><Link to='/nimsai' >Info</Link></li>
                <li className={lin.dropdownContent}><Link to='#' >Team</Link></li>
                <li className={lin.dropdownContent}><Link to='#' >Articles</Link></li>
                </ul>
            </div>
            } 
            </div>
            <button onClick={() => handleClickScroll('nimsdai')} className={lin.link} href='#'>First winter conquest</button>
            <button onClick={() => handleClickScroll('footer')} className={lin.link} href='#'>links</button>
    </header>
    <Routes>
        <Route path="/nimsai" element={<Nimsdai/>}/>
    </Routes>
    </>
    );
};

export default Links;