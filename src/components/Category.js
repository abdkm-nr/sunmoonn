import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MovieList from './MovieList';
import './css/category.css';

const queryClient = new QueryClient();

const mockMovies = [
  {
    imdbID: 'tt3896198',
    Title: 'Guardians of the Galaxy Vol. 2',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2NjY3NF5BMl5BanBnXkFtZTgwNzY1NzY1MTI@._V1_SX300.jpg',
    imdbRating: '7.6'
  },
  // Добавьте другие фильмы для тестирования
];

const Category = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieList movies={mockMovies} />
    </QueryClientProvider>
  );
};

export default Category;
