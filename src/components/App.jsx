import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Whattodo from './Whattodo.jsx';
import Pricing from './Pricing.jsx';
import Didyouknow from './Didyouknow.jsx';
import SignUpPage from './SignUpPage.jsx';
import LoginPage from './LoginPage.jsx';


class App extends React.Component {
	render() {
		return(
		<MuiThemeProvider>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home}/>
	          	<Route path="/didyouknow" component={Didyouknow}/>
	          	<Route path="/whattodo" component={Whattodo}/>
	          	<Route path="/about" component={About}/>
	          	<Route path="/pricing" component={Pricing}/>
	          	<Route path="/signup" component={SignUpPage}/>
	          	<Route path="/login" component={LoginPage}/>
	        </Switch>
	    </div>
		</MuiThemeProvider>
		);
	}
}

export default App;