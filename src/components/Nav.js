import React, { Component } from 'react';
import styles from '../index.sass';

class Nav extends React.PureComponent {
	render() {
		return(
		<div>
			<ul className="menu-list">
				<li className="menu-item">
					<a href="#" className="menu-link">About Us</a>
				</li>
				<li className="menu-item">
					<a href="#" className="menu-link">Gay Us</a>
				</li>
				<li className="menu-item">
					<a href="#" className="menu-link">Faggots Us</a>
				</li>
			</ul>
		</div>
		);
	}
}

export default Nav;