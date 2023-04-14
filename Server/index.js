import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/send-email', formData);
            alert('Email sent successfully!');
            // Reset form data
            setFormData({
                fullName: '',
                companyName: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error(error);
            alert('Failed to send email. Please try again later.');
        }
    }

    return (
        <div className='page-card'>
            <h1>Contact Me</h1>
            <div>
                <form className='contactForm' onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
                        </div>
                        <div>
                            <input type="email" className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder='type message' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    )
};
