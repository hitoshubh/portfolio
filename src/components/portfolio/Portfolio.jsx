import React from "react";
import './portfolio.css';
import P1 from '../../assets/images/ProjectPic1.png'
import { projects } from "../../constant";

const Portfolio =()=>{
    return(
        <section id='portfolio'>
            <h5>Projects</h5>
            <h2>My Work</h2>

            <div className="container port__container">  
                {
                    projects.map((ele,ind)=>(
                        <div key={ind}>
                            <h5>{ele.type}</h5>
                            <h3>{ele.name}</h3>
                            <div className="port__content">
                                <img src={ele.picLink} />
                                <h5 className="__content">{ele.about}</h5>
                                {ele.liveLink !=='' && <a href={ele.liveLink} target="_blank"><button className="btn btn-primary">Link</button></a>}
                                <a href={ele.githubLink} target="_blank"><button className="btn btn-primary">Github Link</button></a>
                            </div>
                        </div>
                    ))
                }                  
            </div>
        </section>
    );
}

export default Portfolio;