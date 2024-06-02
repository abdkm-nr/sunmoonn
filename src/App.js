import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import All from './components/Home'; 
import About from './About/About'; 
import Contact from './Contact/Contact'; 
import OurTeam from './OurTeam/OurTeam'; 
import CatalogPage from "./components/CatalogPage";
import MoviePage from "./components/MoviePage";
import { moviedata } from './components/moviedata';

function App() {
  const handleContactSubmit = (formData) => {
    console.log('Contact form data:', formData);
  };

  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact onSubmit={handleContactSubmit} />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/CatalogPage" element={<CatalogPage />} />
          <Route exact path="/movies" element={<CatalogPage />} />
          <Route path="/movies/:id" element={<MoviePage movies={moviedata} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
