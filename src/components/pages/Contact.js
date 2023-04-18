import React from 'react';

export default function Contact() {
  return (
    <div className='page-card'>
      <h1>Contact Marcus</h1>
      <div>
        <form className='contactForm'>
        {/* <form className='contactForm' onSubmit={handleSubmit} action="/api/send-email" method="post"> */}
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Full Name" />
            </div>
            <div>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Company Name" />
            </div>
          </div>
          <div className="form-group">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea placeholder='type message' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
} 
