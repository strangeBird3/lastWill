import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }


    // set the initial component state
    this.state = {
      redirect: false,
      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
	
	let currentComponent = this;

    // create a string for an HTTP body message
    const email = this.state.user.email;
    const password = this.state.user.password;
    const formData = JSON.stringify({
		email: this.state.user.email,
		password: this.state.user.password
	})
	
    // create an AJAX request
	axios.post('auth/login', formData, 
	  {headers: {'Content-Type': 'application/json'}})
      .then(function(response){
		console.log(response);
		if (response.status === 200) {
		  //change the component-container state
		  currentComponent.setState({
		    errors: {}
		  });
		 
		  // need to send session storage here
		  
		  localStorage.setItem('username', response.config.data.email);
		  currentComponent.setState({redirect: true}); 

	     } else {
			// failure
			console.log(response.message);
			// change the component state
		    const errors = response.errors ? response.errors : {};
			errors.summary = response.message;

			this.setState({
				errors
			})
				
		}	
      })
      .catch(function(error){
        console.log('FAIL');
        console.log(error);
      });
  }	


  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
      {this.state.redirect == false ? 
      (   
        <LoginForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          successMessage={this.state.successMessage}        
          user={this.state.user}
        />
      ) :
      (
        <Redirect to='/homeUser' />  
      )
      }
      </div>
    );
  }

}

export default LoginPage;
