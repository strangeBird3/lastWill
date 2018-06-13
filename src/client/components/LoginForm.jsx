import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'



const LoginForm = ({onSubmit,onChange,errors,successMessage,user}) => (
  <div className="cardContainer">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2> 

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <input className="TextField"
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}>
        </input>
      </div>

      <div className="field-line">
        <input className="TextField"
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}>
        </input>
      </div>

      <div className="button-line">
        <div className="pure-button RaisedButton" 
        type="submit" label="Log in" primary >
        </div>
      </div>

      <div className="CardText"><h2>Don't have an account? <Link to={'/register'}>Create one</Link>.</h2></div>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;