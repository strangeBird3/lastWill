import React, { Component } from 'react';
import styles from '../public/index.sass';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.getRequest = this.getRequest.bind(this);
  	}

  	getRequest() {
  		axios.get('/auth/register')
  			.then(function(response) {
  				console.log(response);
  			})
  			.catch(function(error) {
  				console.log(error);
  			});
  	}

	render() {
		return(
		<div className="home">
			<div className="landing">
				<div className="pure-u-1 pure-u-md-1-5"></div>
				<div className="pure-u-1 pure-u-md-3-5">
					<div className="landingText">
						<h1>This Should Help</h1>
						<h3>This could be the most important piece of mind you can give to your family</h3>
					</div>
				</div>
				<div className="pure-u-1 pure-u-md-1-5"></div>
			</div>
			<div className="pure-u-1 pure-u-md-2-3 homeContent">
				<div className="homeFirst">
					<h2> Personal Tragedy </h2>
					<p>If your time on this Earth came to an unexpected abrupt end, would your family members 
					and/or loved ones know where to find your important documents?</p>
					<p>Even though we don’t want 
					to face the possibilities, bad things can happen . . . and they do!</p>
					<h3>---</h3>
					<p>Now you can have the benefits of an online safety deposit box service in 
					the comfort of your own home.  With our service, you can create a secure 
					document informing your beneficiary (be it a family member, a loved one, 
					or a friend) where to locate your will, financial information, other 
					important information, etc.</p>
					<p>You can make changes, updates, or add new information at any time.</p>
					<h3>---</h3>
					<p>This service utilizes a complex questionnaire template to ascertain all 
					of your vital information without collecting any personally identifying information 
					that is shared with anyone.  Sound confusing?</p>
					<p>The short & sweet version:  after answering the series of questions that will be 
					asked of you (again, nothing personally identifiable will be included in the final 
					report after you have answered all of the questions), in the event of your untimely 
					demise, we will generate a hard copy of this report & send it to the beneficiary 
					(or beneficiaries) of your choosing (said person (or persons) must be of the age of 18 or older). </p>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-3 privacy">
				<div className="privacyFirst">
					<h2> Privacy Policy </h2>
					<p>This Should Help, LLC Privacy Statement: <br />
					This Should Help, LLC is committed to protecting your privacy 
					and ensuring you have a positive experience with our company. 
					This policy outlines our personal information handling practices 
					for both online and offline data. Any personal information given 
					to us will be treated according to this policy.</p>
					<Link to="/Privacy" className="pure-menu-link">Learn More</Link>
				</div>
			</div>

			<button className="benjaminbutton" onClick={this.getRequest}>
				Get Request for auth/register
			</button>
		</div>
		  
		);
	}
}

export default Home;
