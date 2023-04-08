import React from 'react';


export default function About() {
  return (
    <div className='page-card'>
      <h1>Projects</h1>
      <p>
        <div>
          <ul className='iconList'>
        <a href="https://note-taker-capp.herokuapp.com/"><img className="img-icon" src={require("../images/office_icon.png")} width="75" height="75" alt=""/></a>
        <a href="https://mwalker35-stack.github.io/work-day-schedular/"><img className="img-icon" src={require("../images/office_icon.png")} width="75" height="75" alt="" /></a>
        <a href="https://mwalker35-stack.github.io/animated-spork/"><img className="img-icon" src={require("../images/office_icon.png")} width="75" height="75" alt=""/></a>
        </ul>
        </div>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
