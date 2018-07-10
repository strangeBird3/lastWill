import React, { PropTypes } from 'react';
import axios from 'axios';
import styles from '../public/index.sass';

class homeUser extends React.PureComponent {
  constructor(props) {
    super(props);

    // set the initial `component state
    this.state = {

      errors: {},
      }
    };

    //this.processForm = this.processForm.bind(this);
    //this.changeUser = this.changeUser.bind(this);
  
  //processForm(event) {}

  render() {
    return (
      
      <div className="homeUser">

        <h3 className="introApp"> Welcome to your home page. You can fill out or edit your forms 
        at any time and they will update once you hit Save button. Cheers
        </h3>
      </div>
    );
  }
}

export default homeUser;
