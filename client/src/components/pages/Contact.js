import React from 'react';

export default function Contact() {
  return (
    <div className='page-card'>
      <h1>Contact Page</h1>
      <div>
        <form className='contactForm'>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
            <div>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Company Name" />
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
