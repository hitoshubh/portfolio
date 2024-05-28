import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = ()=>{
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/shubham-jauhari/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/Jauhari-01" target="_blank"><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials;