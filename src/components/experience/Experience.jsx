import React from "react";
import './experience.css';
import { backEndTechStack, frontEndTechStack } from "../../constant";
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience=()=>{
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {
                            frontEndTechStack.map((ele,ind)=>(
                                <article key={ind} className="experience__details">
                                    <BsPatchCheckFill className="experience__details-icon"/>
                                    <div>
                                        <h4>{ele.name}</h4>
                                        <small className="text-light">{ele.experience}</small>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
                <div className="experience__frontend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {
                            backEndTechStack.map((ele,ind)=>(
                                <article key={ind} className="experience__details">
                                    <BsPatchCheckFill className="experience__details-icon"/>
                                    <div>
                                        <h4>{ele.name}</h4>
                                        <small className="text-light">{ele.experience}</small>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>                        
            </div>
        </section>      
    )
}

export default Experience;