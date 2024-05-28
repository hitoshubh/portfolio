import React from "react";
import './header.css';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from '../../assets/images/myPic.png';

const  Header=()=>{
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Shubham Mishra</h1>
                <h5 className="text-light">Software Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt='me' />
                </div>
                

                <a href="#contact" className="scroll__dowm">Scroll Down</a>
            </div>
        </header>       
    )
}

export default Header;