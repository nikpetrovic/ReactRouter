import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Repos from './Repos';
import About from './About';
import RepoDetails from './RepoDetails';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

class App extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		return (
			<div>
				<header>App</header>
				<menu>
					<ul>
						<li><Link to="/about" activeClassName="active">About</Link></li>
						<li><Link to="/repos" activeClassName="active">Repos</Link></li>
					</ul>
				</menu>
				{this.props.children}
			</div>
		);
	}
}

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="about" component={About} />
				<Route path="repos" component={Repos}>
					<Route path="details/:repoName" component={RepoDetails} />
				</Route>
			</Route>
		</Router>
	), document.getElementById('root'));