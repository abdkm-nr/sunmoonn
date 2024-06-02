import React, { useState } from 'react';
import './contact.css';

const Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    emailaddress: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onSubmit(formData);

    setFormData({
      name: '',
      emailaddress: '',
      subject: ''
    });
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="What is your name?"
          className="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="emailaddress"
          placeholder="What is your email?"
          className="email"
          type="email"
          value={formData.emailaddress}
          onChange={handleChange}
          required
        />
        <textarea
          rows="4"
          cols="50"
          name="subject"
          placeholder="Please enter your message"
          className="message"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <input name="submit" className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;