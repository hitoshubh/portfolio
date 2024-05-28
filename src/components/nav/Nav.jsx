import React, { useState } from "react";
import './nav.css';
import {LiaHomeSolid} from 'react-icons/lia';
import {BiBookHeart} from 'react-icons/bi';
import {FaHandsHelping} from 'react-icons/fa';
import {SiCodeproject} from 'react-icons/si';
import {MdContacts} from 'react-icons/md';

const  Nav=()=>{
    const [active,setActive] = useState('#');
    return(
        <nav>
            <a href="#" onClick={()=>setActive('#')} className={active==='#'?'active':''}><LiaHomeSolid /></a>
            <a href="#about"  onClick={()=>setActive('#about')} className={active==='#about'?'active':''}><BiBookHeart /></a>
            <a href="#experience"  onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''}><FaHandsHelping /></a>
            <a href="#portfolio"  onClick={()=>setActive('#portfolio')} className={active==='#portfolio'?'active':''}><SiCodeproject /></a>
            <a href="#contact"  onClick={()=>setActive('#contact')} className={active==='#contact'?'active':''}><MdContacts /></a>
        </nav>       
    )
}

export default Nav;