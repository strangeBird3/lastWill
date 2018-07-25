import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Whattodo from './Whattodo.jsx';
import Pricing from './Pricing.jsx';
import Didyouknow from './Didyouknow.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import Forgot from './Forgot.jsx';
import Form_Contact from './Form_Contact.jsx';
import homeUser from '../containers/homeUser.jsx';

import gearsOfWar from '../public/img/weird_gear.jpg';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		}
	}

	handleLogout() {

	}

	render() {
		return(
		<MuiThemeProvider>
		<div className="HUD mainNavmargin">
			<Link className= "accounts" to='/' >
			<button className="acctLink">
				<img className="acctGear" src={gearsOfWar} />
				Account
			</button>
			</Link>
			<Link className="loginLogout" to={'/login'}>
				<button onClick={this.handleLogout} className="loginLogoutBtn" >
			  		{this.state.isLoggedIn ? 'Logout' : 'Login'}
				</button>
			</Link>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home}/>
	          	<Route path="/didyouknow" component={Didyouknow}/>
	          	<Route path="/whattodo" component={Whattodo}/>
	          	<Route path="/about" component={About}/>
	          	<Route path="/pricing" component={Pricing}/>
	          	<Route path="/register" component={SignUpPage}/>
	          	<Route path="/login" component={LoginPage}/>
				<Route path="/forgot" component={Forgot}/>
	          	<Route path="/homeUser" component={homeUser}/>

	          	<Route path="/forms" component={Form_Contact}/>
	        </Switch>
	    </div>
		</MuiThemeProvider>
		);
	}
}

export default App;
