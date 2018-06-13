import React, { Component } from 'react';
import styles from '../public/index.sass';

class Pricing extends React.PureComponent {
	render() {
		return(
		<div className="pricing">
			<div className="pure-u-1 pure-u-md-2-3 pricingContent">
				<div className="pricingFirst">
					<h2> How This Works </h2>
					<p>Here is the short & sweet on how this service works…</p>
					<p>Once you sign up & pay the nominal annual fee, you will be presented 
					with questions broken down into 4 different sections (you will be able to 
					& are encouraged to access your account to keep your information up-to-date 
					at any time). In the unfortunate event of your untimely demise, a beneficiary 
					that you will have chosen will confirm your demise by providing two of the following 
					pieces of information:</p> 
					<ol>	
						<li>A certified copy of a public record of death</li> 
						<li>A statement of death by the funeral director</li>
						<li>A statement of death by the attending physician or the superintendent, physician, 
						or intern of the institution where the person died</li>
						<li>A certified copy of the coroner's report of death or the verdict of the coroner's jury</li>
						<li>A certified copy of an official report of death or finding of death made by an agency or 
						department of the United States (U.S.) that is authorized or required to make such a report</li>
						<li>A statement of death by the attending hospice nurse</li>
						<li>If death occurred outside the United States (U.S.), an official report of death by a 
						U.S. Consul or other employee of the State Department; or a copy of the public record of death 
						in the foreign country.  Once this has been sent to us, the information will be confirmed & a 
						hard copy of the information that you have entered into your account will be printed & sent to 
						your chosen beneficiary. </li>
					</ol>
					<br />
					<p>Here’s a decision you will have to make while signing up.  You will choose a beneficiary 
					(there will be an option for multiple beneficiaries) to receive the information packet.  
					Part of this will consist of how <span className="highlighterBlue">This Should Help</span> will be alerted to your demise.  You 
					will have to select one of the following options: </p>
						<ol>
							<li>You can tell your beneficiary that you have retained our service to help your loved 
							ones with your end of life affairs & that they will need to contact us when you pass away.</li>  
							<li>You can opt for us to send you an email every so often (you can choose once a week, 
								twice a month, or once a month) and should you not respond within a certain time period, 
								we will assume that death has occurred and reach out to your beneficiary to confirm </li>
						</ol>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-3 pricingContent2">
				<div className="pricingSecond">
					<h2> Pricing </h2>
					<div className="prices">
						<br />
						<h4>5$</h4>
						<p>Per Year</p>
					</div>
		           
				</div>
			</div>
		</div>
	  
		);
	}
}

export default Pricing;