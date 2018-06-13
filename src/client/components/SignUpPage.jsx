import React, { PropTypes } from 'react';
import SignUpForm from './SignUpForm.jsx';
import {Redirect} from 'react-router-dom';

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
        name: '',
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
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = this.state.user.name;
    const email = this.state.user.email;
    const password = this.state.user.password;
    const formData = JSON.stringify({
      "name": name,
      "email": email,
      "password": password
    });

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'auth/register');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
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
    xhr.send(formData);
  }

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
