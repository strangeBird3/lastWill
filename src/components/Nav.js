import React, { Component } from 'react';
import styles from '../index.sass';

class Nav extends React.PureComponent {
	render() {
		return(
		<div className="custom-wrapper  pure-g" id="menu">
			<div className="pure-u-1 pure-u-md-1-4">
              <div className="pure-menu">
                  <a href="#" className="pure-menu-heading custom-brand">Logo</a>
                  <a href="#" className="custom-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
              </div>
          	</div>
          	<div className="pure-u-1 pure-u-md-1-2">
              <div className="pure-menu pure-menu-horizontal custom-can-transform">
                  <ul className="pure-menu-list">
                  	  <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">Did You Know?</a></li>
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">What To Do</a></li>
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">About Us</a></li>
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">Pricing</a></li>
                  </ul>
              </div>
          	</div>
          	<div className="pure-u-1 pure-u-md-1-4">
              <div className="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                  <ul className="pure-menu-list">
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">Login</a></li>
                  </ul>
              </div>
          	</div>
		</div>
	  
		);
	}
}

export default Nav;