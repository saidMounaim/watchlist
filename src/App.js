import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import WatchList from './components/WatchList';
import Add from './components/Add';
import Watched from './components/Watched';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<Router>
				<div className="App">
					<Header />
					<Switch>
						<Route exact path="/" component={WatchList} />
						<Route exact path="/watched" component={Watched} />
						<Route exact path="/add" component={Add} />
					</Switch>
				</div>
			</Router>
		</GlobalProvider>
	);
}

export default App;
