import React from 'react';

export default function Blog() {
  return (
    <div className='page-card'>
      <h1>Resume</h1>
      <p>
      <a className='resumeLink' target="_blank"  rel="noopener noreferrer" href={require("../images/TechResume.pdf")}>Marcus Resume</a><br></br>

        Passionate and solutions-driven full stack web developer with a web development certificate from Georgia Tech. 
        Experience in MERN stack web design utilizing a combination of strong 
        communication, collaboration, problem-solving, and analytical skills. 
        Strong ability to design, build, and maintain websites from conception to production. 
        Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.
      </p>
    </div>
  );
}
