import React from 'react';


export default function About() {
  return (
    <div className='row'>
      <h1 style={{textAlign: 'center'}}>Projects</h1>
      <section>

      <div className='column'>
          <a href="https://note-taker-capp.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <img className="img-icon" src={require("../images/notetaker.png")} width="400" height="300" alt=""/>
          </a>
          <p>
            <h2>Note Taker </h2><br />

            <b>Technologies used:</b> Node.js, JavaScript, HTML, CSS<br/><br/>
            <b>Project Overview:</b> An online note taker website that allows users to write and save notes, view all of their notes. The website is built using local storage for storing notes and user information.<br/><br/>
            <b>Project Features:</b> The website includes a add notes button feature and trash can button. Development Process: Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br/><br/>
            <b>Development Process:</b> Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br/><br/>
          </p>
        </div>

        <div className='column'>
          <a href="https://mwalker35-stack.github.io/work-day-schedular/" target="_blank" rel="noopener noreferrer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <img className="img-icon" src={require("../images/workdayscheduler.png")} width="400" height="300" alt=""/>
          </a>
          <p>
            <h2>Work Day Scheduler</h2> <br />

            <b>Technologies used:</b> JavaScript, HTML, CSS<br/><br/>

            <b>Project Overview:</b> An online Day Scheduler website that allows users to write and save to a one page schedular, view all of day at a glance. The website is built using local storage for storing notes and user information.<br/><br />
            <b>Project Features:</b> The website includes a save notes button feature and color changing background for passed time on the Scheduler. Development Process: Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br/><br/>
            <b>Development Process:</b> Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br/><br/>
          </p>
        </div>

        <div className='column'>
          <a href="https://mwalker35-stack.github.io/animated-spork/" target="_blank" rel="noopener noreferrer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <img className="img-icon" src={require("../images/moviedating .png")} width="400" height="300" alt=""/>
          </a>
          <p>
            <h2>Movie Minder</h2> <br/>

            <b>Technologies used:</b> JavaScript, HTML, CSS, API's<br/><br/>
            <b>Project Overview:</b> An online most poplular movies website that allows users to vote a thumbs up or thumbs down to select a movie date for the night. After selecting a genre a prompt to vote appears. The website is built using HTML, API calls, CSS, Javascript.<br /><br/>
            <b>Project Features:</b> Movie voting after selecting a genre and a list of movies in this section.<br/><br/>
            <b>Development Process:</b> Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br/><br/>
            <b>Future Plans:</b> Future plans for the project include adding more categories, allowing users to save movies to a watchlist, and implementing social media sharing and login functionality.<br/><br/>
          </p>
        </div>
        {/* additonal project can go here! */}
        
          </section>
    </div>
    
  );
}
