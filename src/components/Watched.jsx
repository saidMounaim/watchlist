import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watched = () => {
	const { watched } = useContext(GlobalContext);

	return (
		<div className="movie-page">
			<div className="container">
				<div className="header">
					<h1 className="heading">My Watched</h1>
				</div>
				<div className="movie-grid">
					{watched.length > 0 && watched.map((movie) => <MovieCard movie={movie} type="watched" />)}
				</div>
				{watched.length === 0 && <h2 className="no-movies">No movies in watched</h2>}
			</div>
		</div>
	);
};

export default Watched;
