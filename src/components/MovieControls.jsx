import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function MovieControls({ movie, type }) {
	const { removeMovieFromWatchlist, addMovieToWatched, addMovieToWatchlist, removeMovieFromWatched } = useContext(
		GlobalContext
	);

	return (
		<div className="inner-card-controls">
			{(type === 'watchlist' && (
				<>
					<button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
						<i class="fas fa-eye"></i>
					</button>
					<button
						className="ctrl-btn"
						onClick={() => {
							if (window.confirm('Are you sure?')) removeMovieFromWatchlist(movie.id);
						}}
					>
						<i class="fas fa-times"></i>
					</button>
				</>
			)) || (
				<>
					<button className="ctrl-btn" onClick={() => addMovieToWatchlist(movie)}>
						<i class="fas fa-list"></i>
					</button>
					<button
						className="ctrl-btn"
						onClick={() => {
							if (window.confirm('Are you sure?')) removeMovieFromWatched(movie.id);
						}}
					>
						<i className="fas fa-times"></i>
					</button>
				</>
			)}
		</div>
	);
}

export default MovieControls;
