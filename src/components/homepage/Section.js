import React from 'react';
import './Section.css';

const Section=(props)=>{
    return(
        <section id= {props.sectionId} className="section">
        <h2>{props.heading}</h2>
        <p>
            {props.content};
        </p>
      </section>
    )
}

export default Section;