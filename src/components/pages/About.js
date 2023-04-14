import React from 'react';


export default function About() {
  return (
    <div className='page-card'>
      <h1>Projects</h1>
      <p>
        <div>
          <ul className='iconList'>
        <a href="https://note-taker-capp.herokuapp.com/" target="_blank"  rel="noopener noreferrer"><img className="img-icon" src={require("../images/notetaker.png")} width="400" height="300" alt=""/></a>
        <a href="https://mwalker35-stack.github.io/work-day-schedular/" target="_blank"  rel="noopener noreferrer"><img className="img-icon" src={require("../images/workdayscheduler.png")} width="400" height="300" alt=""/></a>
        <a href="https://mwalker35-stack.github.io/animated-spork/" target="_blank"  rel="noopener noreferrer"><img className="img-icon" src={require("../images/moviedating .png")} width="400" height="300" alt=""/></a>
        </ul>
        </div>
Project 1: Note Taker

Technologies used: Node.js, JavaScript, HTML, CSS
Project Overview: An online note taker website that allows users to write and save notes, view all of their notes. The website is built using local storage for storing notes and user information.
Project Features: The website includes a add notes button feature and trash can button. Development Process: Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control. 
<br />
<br />
<br />
Project 2: Work Day Scheduler

Technologies used: JavaScript, HTML, CSS
Project Overview: An online Day Scheduler website that allows users to write and save to a one page schedular, view all of day at a glance. The website is built using local storage for storing notes and user information.
Project Features: The website includes a save notes button feature and color changing background for passed time on the Scheduler. Development Process: Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control. 
<br />
<br />
<br />
Project 3: Movie Minder

Technologies used: JavaScript, HTML, CSS, API's
Project Overview: An online most poplular movies website that allows users to vote a thumbs up or thumbs down to select a movie date for the night. After selecting a genre a prompt to vote appears. The website is built using HTML, API calls, CSS, Javascript.
Project Features: Movie voting after selecting a genre and a list of movies in this section.
Development Process: Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control. 
Future Plans: Future plans for the project include adding more categories, allowing users to save movies to a watchlist, and implementing social media sharing and login functionality.

      </p>
    </div>
  );
}
