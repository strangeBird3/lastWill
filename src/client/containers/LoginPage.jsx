import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Auth from '../modules/Auth.js';
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
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        console.log('success');
        console.log(response.token);

		if (response.status === 200) {
		  //change the component-container state
		  this.setState({
		    errors: {}
		  });
		  
		  // save the token
		  Auth.authenticateUser(response.token);

		  localStorage.setItem('username', JSON.stringify(response.user.email));
		  console.log(JSON.parse(localStorage.getItem('username')).name); 

		   this.setState({redirect: true}); 

		   } else {
			// failure

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

/*
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);


        localStorage.setItem('usrname', JSON.stringify(xhr.response.user));
        
        console.log(JSON.parse(localStorage.getItem('usrname')).name);
        // if(xhr.response.user)
        // {
        //   console.log(xhr.response.user);
        // }
        // else{
        //   console.log('after signin no user returned');

        // }
        this.setState({redirect: true});
        // change the current URL to /
        // this.context.router.replace('/');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData); 
*/
  

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
      // <div>
      //   LoginPage
      // </div> 
      <div>
      {this.state.redirect == false? (   
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}        
        user={this.state.user}
      />):(
        <Redirect to='/' />
        
      )
      }
      </div>
    );
  }

}

export default LoginPage;