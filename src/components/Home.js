import React, { Component } from 'react';
import styles from '../index.sass';

class Home extends React.PureComponent {
	render() {
		return(
		<div className="landing">
			<div className="pure-u-1 pure-u-sm-1-5"></div>
			<div className="pure-u-1 pure-u-sm-3-5 landingText">
				<h1>This Should Help</h1>
				<h2>This could be the most important piece of mind you can give to your family</h2>
			</div>
			<div className="pure-u-1 pure-u-sm-1-5"></div>
			
		</div>
	  
		);
	}
}

export default Home;