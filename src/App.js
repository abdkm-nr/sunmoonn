import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './Header/Header';
import All from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import OurTeam from './OurTeam/OurTeam';

function App() {
  const handleContactSubmit = (formData) => {
    console.log('Contact form data:', formData);
    // Здесь можно отправить данные на сервер
  };

// const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact/>} /> */}
          <Route path="/contact" element={<Contact onSubmit={handleContactSubmit} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/ourteam" element={<OurTeam/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
