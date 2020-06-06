import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({ movie }) => {
	const { addMovieToWatchList, watchlist } = useContext(GlobalContext);

	let storedMovie = watchlist.find((o) => o.id === movie.id);
	const watchlistDisable = storedMovie ? true : false;

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
					<button className="btn" disabled={watchlistDisable} onClick={() => addMovieToWatchList(movie)}>
						Add to watchlist
					</button>
				</div>
			</div>
		</div>
	);
};

export default ResultCard;
