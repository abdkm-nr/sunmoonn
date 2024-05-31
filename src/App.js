// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import CatalogPage from "./components/CatalogPage";
import MoviePage from "./components/MoviePage";
import moviedata from "./components/moviedata";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services services={['Web Development', 'App Development', 'SEO Optimization']} />} />
          <Route path="/CatalogPage" element={<CatalogPage />} />
          <Route exact path="/movies" element={<CatalogPage />} />
          <Route path="/movies/:id" element={<MoviePage movies={moviedata} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
