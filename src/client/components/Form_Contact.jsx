import React, { Component } from 'react';
import styles from '../public/index.sass';
import { Link } from 'react-router-dom';

class MailingAddress extends React.PureComponent {
	render() {
		return(
		<div className="mailing">
            <div>
                <label for="mailAddress">Street</label>
                <input id="mailAddress" className="pure-u-23-24" type="text" required/>
            </div>
            <div>
                <label for="mailCity">City</label>
                <input id="mailCity" className="pure-u-23-24" type="text"/>
            </div>
            <div>
                <label for="mailState">State</label>
                <select id="mailState" className="pure-input-1-2">
                    <option>AL</option>
                    <option>CA</option>
                    <option>IL</option>
                </select>
            </div>
            <div>
                <label for="mailZip">Zip Code</label>
                <input id=" mailZip" className="pure-u-23-24" type="text"/>
            </div>
        </div>
        );
	};
};

class BillingAddress extends React.PureComponent {
	render() {
		return(
			<div className="billing">
	            <div>
	                <label for="billAddress">Street</label>
	                <input id="billAddress" className="pure-u-23-24" type="text" required/>
	            </div>
	            <div>
	                <label for="billCity">City</label>
	                <input id="billCity" className="pure-u-23-24" type="text"/>
	            </div>
	            <div>
	                <label for="billState">State</label>
	                <select id="billState" className="pure-input-1-2">
	                    <option>AL</option>
	                    <option>CA</option>
	                    <option>IL</option>
	                </select>
	            </div>
	            <div>
	                <label for="billZip">Zip Code</label>
	                <input id=" billZip" className="pure-u-23-24" type="text"/>
	            </div>
	        </div>
        );
	};
};


class Form_Contact extends React.PureComponent {

	constructor(props) {
	    super(props);

		this.state = {
			isHidden: true,
			firstName: '',
			middleName: '',
			lastName: '',
		};

	};


	toggleHidden () {
	    this.setState({
	      isHidden: !this.state.isHidden	  
	    })
	  }

	
	  
	render() {

		return(
	
			<form className="form1 pure-form pure-form-stacked">
				<fieldset>
					<h2 className="contactHead">Contact Information</h2>
					<h3 className="contactWarning">*PLEASE ENTER ALL INFORMATION ON THIS PAGE EXACTLY AS IT READS 
					ON OFFICIAL DOCUMENTATION AS THIS WILL BE USED AS PART OF THE VERIFICATION 
					PROCESS.*​</h3>
					<div>
			            <div>
			                <label for="prefix">Prefix</label>
			                <select id="prefix" className="pure-input-2-3">
			                    <option value="none">None</option> 
			                    <option value="Ms"> Ms </option> 
							    <option value="Miss"> Miss </option> 
							    <option value="Mrs"> Mrs </option> 
							    <option value="Mr"> Mr </option> 
							    <option value="Master"> Master </option> 
							    <option value="Fr"> Father (Fr) </option>
							    <option value="Rev"> Reverend (Rev) </option>
							    <option value="Dr"> Doctor (Dr) </option> 
							    <option value="Atty"> Attorney (Atty) </option>  
							    <option value="Hon"> Honorable (Hon) </option>  
							    <option value="Prof"> Professor (Prof) </option>  
							    <option value="Pres"> President (Pres) </option> 
							    <option value="VP"> Vice President (VP) </option> 
							    <option value="Gov"> Governor (Gov) </option>  
							    <option value="Ofc"> Officer (Ofc) </option> 
			                </select>
			            </div>
			            <div>
			                <label for="fullName">Full Name</label>
			                <input id="fullName" className="pure-input-2-3" type="text" required/>
			            </div>			      
			            <div>
			                <label for="suffix">Suffix</label>
			                <select id="suffix" className="pure-input-2-3">
			                    <option value="none">None</option> 
			                    <option value="Ms"> Ms </option> 
							    <option value="Miss"> Miss </option> 
			                </select>
			            </div>
			            <div>
			                <label for="dob">Date of Birth</label>
			                <input id="dob" className="pure-input-1-2" type="text" required/>
			            </div>
        			</div>
        			<div>
			            <div>
			                <label for="homeNumber">Home Number</label>
			                <input id="homeNumber" className="pure-input-1-2" type="text" required/>
			            </div>
			            <div>
			                <label for="mobileNumber">Mobile Number</label>
			                <input id="mobileNumber" className="pure-input-1-2" type="text" />
			            </div>
			           <div>
			                <label for="workNumber">Work Number</label>
			                <input id="workNumber" className="pure-input-1-2" type="text" />
			           </div>
			        </div>
        			<h2 className="contactHead">Home Address</h2>
					<div>
			            <div>
			                <label for="streetAddress">Street</label>
			                <input id="streetAddress" className="pure-input-2-3" type="text" required/>
			            </div>
			            <div>
			                <label for="homeCity">City</label>
			                <input id="homeCity" className="pure-input-2-3" type="text" required/>
			            </div>
			            <div>
			                <label for="homeState">State</label>
			                <input id="homeState" className="pure-input-1-2" type="text" required/>
			            </div>
			            <div>
			                <label for="homeZip">Zip Code</label>
			                <input id="homeZip" className="pure-input-1-2" type="text" required/>
			            </div>
			        </div>
			        <div><h2 className="contactHead">Mailing Address </h2>
			        	<button className="buttonAddress" onClick={this.toggleHidden.bind(this)} >
				          Click Here if Mailing Address is different from Home
				        </button>
				        {!this.state.isHidden && <MailingAddress />}
   					</div>
			        <div><h2 className="contactHead">Billing Address </h2>
			        	<button className="buttonAddress" onClick={this.toggleHidden.bind(this)} >
				          Click Here if Billing Address is different from Home or Mailing
				        </button>
				        {!this.state.isHidden && <BillingAddress />}
        			</div>
        			
				</fieldset>
				<br/>
    				<button className="pure-button button-success">Save & Continue</button>
        			<br />
        			<br />
			</form>
		);
	}
};

export default Form_Contact;