import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({ movie }) => {
	const { addMovieToWatchlist, watchlist, addMovieToWatched, watched } = useContext(GlobalContext);

	const storedWatchlist = watchlist.find((o) => o.id === movie.id);
	const disabledWatchlist = storedWatchlist ? true : false;

	const storedWatched = watched.find((w) => w.id === movie.id);
	const disabledWatched = storedWatched ? true : false;

	return (
		<div className="result-card">
			<div className="poster-wrapper">
				{movie.poster_path ? (
					<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
				) : (
					<div className="filter-poster"></div>
				)}
			</div>
			<div className="info">
				<div className="header">
					<h2 className="title">{movie.title}</h2>
					<h4 className="release-date">{movie.release_date.substring(0, 4)}</h4>
				</div>
				<div className="controls">
					<button className="btn" onClick={() => addMovieToWatchlist(movie)} disabled={disabledWatchlist}>
						Add to watchlist
					</button>
					<button className="btn" onClick={() => addMovieToWatched(movie)} disabled={disabledWatched}>
						Add to watched
					</button>
				</div>
			</div>
		</div>
	);
};

export default ResultCard;
