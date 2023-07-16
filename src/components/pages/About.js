import React from 'react';


export default function About() {
  return (
    <div className='row'>
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <section><br /><br /><br /><br />

        <div className='column'>
          <a href="https://py-newsfeeds-5f57cfa528ee.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img className="img-icon" src={require("../images/just tech gif Jul 16, 2023 3_40 PM.gif")} width="400" height="300" alt="" />
          </a>
          <p>
            <h2>Chat Social</h2> <br />

            <b>Technologies used:</b> Python, Flask, SQLAlchemy, PyMySQL, bcrypt, python-dotenv, Gunicorn<br /><br />
            <b>Project Overview:</b> Just Tech News, lets users submit links to tech-related articles, comment on other users' articles, and upvote articles for points.<br /><br />
            <b>Project Features:</b> Post tech related articles, vote up post's and comment on post's. Edit your own post's, or delete your own post's.<br /><br />
            <b>Development Process:</b> Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br /><br />
            <b>Future Plans:</b> Future plans for the project include, adding a thumbnail view of the webpage, user avatar.<br /><br />
          </p>
        </div>

        <div className='column'>
          <a href="https://chat-social-4-6-22.herokuapp.com/#home" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img className="img-icon" src={require("../images/ChatSocial.png")} width="400" height="300" alt="" />
          </a>
          <p>
            <h2>Just Tech News</h2> <br />

            <b>Technologies used:</b> MongoDB, React, Socket.io, JavaScript<br /><br />
            <b>Project Overview:</b> An online Chat app allows users to connect in chat rooms of different topics. The website is built using React, CSS, Javascript, MongoDB.<br /><br />
            <b>Project Features:</b> Movie voting after selecting a genre and a list of movies in this section.<br /><br />
            <b>Development Process:</b> Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br /><br />
            <b>Future Plans:</b> Future plans for the project include, set emoji's to each room, allowing users to have multiple chat rooms open, and implementing social media sharing and login functionality.<br /><br />
          </p>
        </div>

        <div className='column'>
          <a href="https://bit.ly/3JBuMfn" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img className="img-icon" src={require("../images/deepthought gif 16, 2023 4_56 PM.gif")} width="400" height="300" alt="" />
          </a>
          <p>
            <h2>Deep Thoughts </h2><br />

            <b>Technologies used:</b> React, AWS, Multer, Node.js, UUID, NGINX, MongoDB, Express.js<br /><br />
            <b>Project Overview:</b> An online thoughts forum website that allows users to write a thought and add an image view all of a users thoughts. The website is built using React, DynamoDB, S3 bucket for storing objects and DynamoDB for NoSQL key-value and document database information.<br /><br />
            <b>Project Features:</b> The website includes an add image button and submit thought. View all of a User's thoughts by clicking user's title header.<br /><br />
            <b>Development Process:</b> Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br /><br />
          </p>
        </div>

        <div className='column'>
          <a href="https://mwalker35-stack.github.io/work-day-schedular/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img className="img-icon" src={require("../images/workdayscheduler.png")} width="400" height="300" alt="" />
          </a>
          <p>
            <h2>Work Day Scheduler</h2> <br />

            <b>Technologies used:</b> JavaScript, HTML, CSS<br /><br />

            <b>Project Overview:</b> An online Day Scheduler website that allows users to write and save to a one page schedular, view all of day at a glance. The website is built using local storage for storing notes and user information.<br /><br />
            <b>Project Features:</b> The website includes a save notes button feature and color changing background for passed time on the Scheduler. Development Process: Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br /><br />
            <b>Development Process:</b> Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br /><br />
          </p>
        </div>

        <div className='column'>
          <a href="https://mwalker35-stack.github.io/animated-spork/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img className="img-icon" src={require("../images/moviedating .png")} width="400" height="300" alt="" />
          </a>
          <p>
            <h2>Movie Minder</h2> <br />

            <b>Technologies used:</b> JavaScript, HTML, CSS, API's<br /><br />
            <b>Project Overview:</b> An online most poplular movies website that allows users to vote a thumbs up or thumbs down to select a movie date for the night. After selecting a genre a prompt to vote appears. The website is built using HTML, API calls, CSS, Javascript.<br /><br />
            <b>Project Features:</b> Movie voting after selecting a genre and a list of movies in this section.<br /><br />
            <b>Development Process:</b> Agile development methodology was used, with daily stand-ups and weekly sprints. Git was used for version control.<br /><br />
            <b>Future Plans:</b> Future plans for the project include adding more categories, allowing users to save movies to a watchlist, and implementing social media sharing and login functionality.<br /><br />
          </p>
        </div>


        {/* additonal project can go here! */}

      </section>
    </div>

  );
}
