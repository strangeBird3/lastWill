import React, { Component } from 'react';
import styles from '../public/index.sass';
import majorPic from '../public/img/majormajor.jpg';

class About extends React.PureComponent {
	render() {
		return(
		<div className="about">
			<div className="pure-u-1 pure-u-md-2-3 aboutContent">
				<div className="aboutFirst">
					<h2> About Us </h2>
					<p>My name is Rob Greenfield, President & Founder or This Should Help, 
					and when a dear friend and colleague passed away suddenly, I was inspired 
					to create This Should Help as a service to help others.</p>
					<h3>---</h3>
					<p>Major Edwin “E-Rod” Rodriguez was only 44 years old when he passed away 
					unexpectedly and left his wife and 2 children wondering what to do next. 
					Not only did this young family have to deal with the shock and emotion of his 
					passing but there was a great deal of uncertainty of where important documents 
					were located or what needed to be taken of.</p>
					<p>The fact is, most of us don’t want to deal with end of life issues, which in 
					turn will put a terrible burden on our loved ones during a very emotional time.
					$2 from every client who signs up for our service through December 31, 2018 will 
					go to an education fund for the children of Major Rodriguez. Also, This Should Help 
					will be creating the Major Rodriguez scholarship memorial fund which will bestow an 
					annual scholarship of $2,500 to 2 college bound seniors who have lost a 1st responder 
					immediate family member. Lastly, every month, This Should Help will donate a percentage 
					of it’s sales for that month to a specific charity which will be depicted on the home page.</p>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-3 major">
				<div className="majorFirst">
					<h2> Major <br /> Edwin "E Rod" Rodriguez </h2>
					<img className="pure-img-responsive" src={majorPic} alt="Major Major Edwin E. Rod Rodriguez" />
					<p>Beloved Son, Brother, Husband, Father, Mentor and friend to all.</p>
					<p>1972-2016. Rest in Peace</p>
				</div>
			</div>
		</div>
	  
		);
	}
}

export default About;