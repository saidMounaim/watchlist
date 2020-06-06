import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state

const initialState = {
	watchlist: [],
	watched: [],
};

// create context

export const GlobalContext = createContext(initialState);

// create provider

export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const addMovieToWatchList = (movie) => {
		dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
	};

	return (
		<GlobalContext.Provider
			value={{
				watchlist: state.watchlist,
				watched: state.watched,
				addMovieToWatchList,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
