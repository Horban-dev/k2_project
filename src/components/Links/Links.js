import React, { useEffect, useState } from 'react';
import lin from './Links.module.css'
import '../../App.css'
const Links = () => {
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(false) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

  const cls = visible ? "visible" : "hidden";
  
    return (
        <header className={cls}>
            <a className={lin.link} href='#'>Home</a>
            <a className={lin.link} href='#'>History 🏔</a>
            <a className={lin.link} href='#'>First conquest</a>
            <a className={lin.link} href='#'>Nowdays</a>
            <a className={lin.link} href='#'>Photos</a>
            <a className={lin.link} href='#'>Videos</a>
            <a className={lin.link} href='#'>links</a>
        
    </header>
    );
};

export default Links;