import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing/Landing';
import Search from './components/Search/Search';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={Landing} />
					<Route path='/search' component={Search} />
				</div>
			</Router>
		);
	}
}

export default App;