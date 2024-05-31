// src/components/Services.js
import React from 'react';

const Services = (props) => (
  <div>
    <h1>Our Services</h1>
    <ul>
      {props.services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

export default Services;
