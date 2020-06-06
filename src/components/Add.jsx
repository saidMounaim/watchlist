import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

const Add = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	const onChange = (e) => {
		setQuery(e.target.value);

		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
			)
			.then((response) => {
				setResults(response.data.results);
			});
	};

	return (
		<div className="add-page">
			<div className="container">
				<div className="add-content">
					<div className="input-wrapper">
						<input type="text" value={query} onChange={onChange} placeholder="Search for a movie" />
					</div>
					<ul className="results">
						{results.length > 0 &&
							results.map((movie) => (
								<li key={movie.id}>
									<ResultCard movie={movie} />
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Add;
