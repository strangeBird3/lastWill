import React, { Component } from 'react';
import styles from '../index.sass';

class Home extends React.PureComponent {
	render() {
		return(
		<div className="home">
			<div className="landing">
				<div className="pure-u-1 pure-u-sm-1-5"></div>
				<div className="pure-u-1 pure-u-sm-3-5">
					<div className="landingText">
						<h1>This Should Help</h1>
						<h3>This could be the most important piece of mind you can give to your family</h3>
					</div>
				</div>
				<div className="pure-u-1 pure-u-sm-1-5"></div>
			</div>
			<div className="pure-u-1 pure-u-sm-1-1 homeContent">
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
		</div>
		  
		);
	}
}

export default Home;