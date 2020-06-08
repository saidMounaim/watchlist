import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const WatchList = () => {
	const { watchlist } = useContext(GlobalContext);

	return (
		<div className="movie-page">
			<div className="container">
				<div className="header">
					<h1 className="heading">My Watchlist</h1>
				</div>
				<div className="movie-grid">
					{watchlist.length > 0 && watchlist.map((movie) => <MovieCard movie={movie} type="watchlist" />)}
				</div>
				{watchlist.length === 0 && <h2 className="no-movies">No movies in watchlist</h2>}
			</div>
		</div>
	);
};

export default WatchList;
