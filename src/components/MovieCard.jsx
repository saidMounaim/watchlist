import React from 'react';
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => {
	return (
		<div className="movie-card">
			<div className="overlay"></div>
			{movie.poster_path ? (
				<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
			) : (
				<div className="filter-poster"></div>
			)}
			<MovieControls movie={movie} type={type} />
		</div>
	);
};

export default MovieCard;
