import React from 'react'

export default function Footer() {
  return (
    <div className="card text-center">
      {/* <div className="card-header">

  </div> */}
      <div className="card-body">
        <h5 className="card-title">Connect</h5>
        <p className="card-text"></p>
        <a href="https://github.com/mwalker35-stack" className="btn btn-transparent" target="_blank"  rel="noopener noreferrer">
          <img src={require("./images/GitHub_icon.png")} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/marcus-walker-b7031388/" className="btn btn-transparent" target="_blank"  rel="noopener noreferrer">
          <img src={require("./images/linkedin_icon.png")} alt=""/>
        </a>
        <a href="mailto:mwalketsy@gmail.com" className="btn btn-transparent"  target="_blank"  rel="noopener noreferrer">
          <img src={require("./images/email_icon.png")} alt="" />
        </a>
        <p className="footline">
          Created by: Marcus Walker 
        </p>
      </div>
      {/* <div className="card-footer text-muted">

  </div> */}
    </div>
  )
}