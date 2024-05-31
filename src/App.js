import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import All from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services services={['Web Development', 'App Development', 'SEO Optimization']} />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route path="/" component={LoginForm} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
