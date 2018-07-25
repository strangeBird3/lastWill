import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Forgot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	onSubmit(event) {
	  event.preventDefault();

	  axios.post('auth/forgot', 
	  	{headers: {'Content-Type': 'application/json'}})
      	.then(function(response){
      		if (response.status === 200) {
      			console.log(response);
      		}
      	})
	}

	render() {
		return(
		<div className="forgotPassword">
		  <form action="/" className="pure-form pure-form-stacked" onSubmit={this.onSubmit}>
		    <h2>Forgot Password</h2>
		    <label for="emailForgot">Email</label>
		    <input id="emailForgot" className="pure-input-2-3" type="text" required/>
		    <button type="submit" className="pure-button button-success">Reset Password</button>
		  </form>
		</div>
		);
	}
}

export default Forgot;
