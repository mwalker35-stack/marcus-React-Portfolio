import React from 'react';

export default function Home() {
  return (
    <div className='page-card'>
      <h1>Home Page</h1>
      <p>
        <img className="img-fluid mx-auto d-block" src={require("../images/marcus profile pic.jpg")} width="450" height="350" alt="" /> 
        
        Hi I'm Marcus Walker. I recently completed a Full Stack web development bootcamp and created a GitHub to show case my skills. My repositories contain projects that I have built using HTML, CSS, JavaScript, Node.js, Express, React, and MongoDB. These projects demonstrate my ability to create responsive & interactive web applications from scratch. My repositories were designed to help others who are learning full stack web development or who are interested in seeing examples of real-world projects.
      </p>
    
    </div>
  );
}
