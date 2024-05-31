import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Category from './components/Category';
import MovieDetails from './components/MovieDetails'; // Импортируем компонент для детальной информации о фильме

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services services={['Web Development', 'App Development', 'SEO Optimization']} />} />
          <Route path="/category" element={<Category />} />
          <Route path="/movie/:id" element={<MovieDetails />} /> {/* Добавляем маршрут для детальной информации о фильме */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
