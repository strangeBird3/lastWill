import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Whattodo from './Whattodo.js';
import Pricing from './Pricing.js';
import Didyouknow from './Didyouknow.js';



class App extends React.Component {
	render() {
		return(
		<div>
			<Nav />
			<Route path="/Home" component={Home}/>
          	<Route path="/Didyouknow" component={Didyouknow}/>
          	<Route path="/Whattodo" component={Whattodo}/>
          	<Route path="/About" component={About}/>
          	<Route path="/Pricing" component={Pricing}/>

		</div>
		);
	}
}

export default App;