import React from "react";
import './about.css';
import ME from '../../assets/images/aboutMe.png';
import { aboutMeContent } from "../../constant";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <ul className="about__content">
                    {aboutMeContent.map((ele,ind)=>(
                        <li key={ind}>{ele.content}</li>
                    ))}
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </ul>
                
                
            </div>

        </section>
    )
}

export default About;