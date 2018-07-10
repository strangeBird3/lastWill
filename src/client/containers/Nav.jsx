import React, { Component } from 'react';
import styles from '../public/index.sass';
import { Link } from 'react-router-dom';
import logo from '../public/img/safe-locker.svg';
import {slide as Menu} from 'react-burger-menu';

class Nav extends React.PureComponent {  
  constructor(props) {
	super(props)
	this.state = {
	  menuOpen: false
	}

	this.handleStateChange = this.handleStateChange.bind(this);
	this.closeMenu = this.closeMenu.bind(this);
	this.toggleMenu = this.toggleMenu.bind(this);
  } 

  handleStateChange(state) {
	this.setState({menuOpen: state.isOpen})
  }

  closeMenu() {
	this.setState({menuOpen: false})
  }

  toggleMenu() {
	this.setState({menuOpen: !this.setState.value})
  }

  render() {
		return(
        <Menu isOpen={this.state.menuOpen} 
			  onStateChange={(state) => this.handleStateChange(state)}>  
			  	
			<li className="menu1"><Link onClick={this.closeMenu} to="/" className="pure-menu-link">Home</Link></li>
			<li className="menu2"><Link onClick={this.closeMenu} to="/didyouknow" className="pure-menu-link">Did You Know?</Link></li>
			<li className="menu3"><Link onClick={this.closeMenu} to="/whattodo" className="pure-menu-link">What To Do</Link></li>
			<li className="menu4"><Link onClick={this.closeMenu} to="/about" className="pure-menu-link">About Us</Link></li>
			<li className="menu5"><Link onClick={this.closeMenu} to="/pricing" className="pure-menu-link">Pricing/How It Works</Link></li>
			<li className="menu6"><Link onClick={this.closeMenu} to="/register" className="pure-menu-link">Register</Link></li>
		</Menu>
		  );
	 }
}


export default Nav;
