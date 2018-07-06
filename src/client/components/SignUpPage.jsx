import React, { PropTypes } from 'react';
import SignUpForm from './SignUpForm.jsx';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      redirect: false,
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    event.preventDefault();

    // create a string for an HTTP body message
    const email = this.state.user.email;
    const password = this.state.user.password;
    const formData = {
      "email": email,
      "password": password
    };
    const data = JSON.stringify({
      email: this.state.user.email,
      password: this.state.user.password
    })


    axios.post('auth/register', data, {
      headers: {'Content-Type': 'application/json'}
    })
      .then(function(response){
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        console.log('success');
      })
      .catch(function(error){
        console.log('FAIL');
        console.log(error);
      });
  }

  /*  xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });
        
        // set a message
        localStorage.setItem('successMessage', xhr.response.message);
        this.setState({redirect: true});

      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
*/

  /**
   * Render the component.
   */
  render() {
    return (
      // <div>
      //   signup
      // </div>
      <div>
      {this.state.redirect == false ?(
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
      ):
      (
        <Redirect to='/login' />
      )
      }
      </div>
    );
  }
}

export default SignUpPage;
