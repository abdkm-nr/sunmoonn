import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import All from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
