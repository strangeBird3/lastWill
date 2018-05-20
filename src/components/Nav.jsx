import React, { Component } from 'react';
import styles from '../public/index.sass';
import { Link } from 'react-router-dom';
import logo from '../public/img/safe-locker.svg';


class Nav extends React.PureComponent {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle(e)  {
    e.preventDefault()

    const menu = document.getElementById('menu')
    //   WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize'

    const toggleHorizontal = () => {
      [].forEach.call(
        document.getElementById('menu').querySelectorAll('.custom-can-transform'),
        function(el){
          el.classList.toggle('pure-menu-horizontal');
        }
      );
    }

    const toggleMenu = () => {
      if (menu.classList.contains('open')) {
        setTimeout(toggleHorizontal, 500);
      }
      else (
        toggleHorizontal()
      )
      menu.classList.toggle('open');
      document.getElementById('toggle').classList.toggle('x');
    }

    const closeMenu = () => {
      if (menu.classList.contains('open')) {
        toggleMenu()
      }
    }

  /*document.getElementById('toggle').addEventListener('click', function (e) {
    toggleMenu()
    e.preventDefault()
  }) */

   // window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu())
  }
  
  render() {
		return(
		<div className="custom-wrapper  pure-g" id="menu">
			     <div className="pure-u-1 pure-u-md-1-4">
              <div className="pure-menu">
                  <a href="#" className="pure-menu-heading custom-brand">
                    <img className="pure-img-responsive" src={logo} alt="logo" />
                  </a>
                  <a href="#" className="custom-toggle" id="toggle" onClick={this.toggle}><s className="bar"></s><s className="bar"></s></a>
              </div>
          	</div>
          	<div className="pure-u-1 pure-u-sm-1-2">
              <div className="pure-menu pure-menu-horizontal custom-can-transform">
                  <ul className="pure-menu-list">
                  	  <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                      <li className="pure-menu-item"><Link to="/didyouknow" className="pure-menu-link">Did You Know?</Link></li>
                      <li className="pure-menu-item"><Link to="/whattodo" className="pure-menu-link">What To Do</Link></li>
                      <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About Us</Link></li>
                      <li className="pure-menu-item"><Link to="/pricing" className="pure-menu-link">Pricing/How It Works</Link></li>
                  </ul>
              </div>
          	</div>
          	<div className="pure-u-1 pure-u-md-1-4">
              <div className="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                  <ul className="pure-menu-list">
                      <li className="pure-menu-item"><Link to="/signup" className="pure-menu-link">Register</Link></li>
                  </ul>
              </div>
          	</div>
          

		  </div>
		  );
	 }
}


export default Nav;
