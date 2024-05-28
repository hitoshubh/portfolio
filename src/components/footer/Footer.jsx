import React from "react";
import './footer.css';
import {GrLinkedinOption} from 'react-icons/gr';
import {FaGithubAlt} from 'react-icons/fa';

const Footer=()=>{
    return(
        <footer>
            <a className="footer__logo" href="#">SHUBHAM JAUHARI</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Expeirience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/Jauhari-01" target="_blank"><FaGithubAlt /></a>
                <a href="https://www.linkedin.com/in/shubham-jauhari/" target="_blank"><GrLinkedinOption /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; SHUBHAM JAUHARI. All rights reserved.</small>
            </div>
        </footer>      
    )
}

export default Footer;