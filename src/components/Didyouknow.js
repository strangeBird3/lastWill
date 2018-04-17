import React, { Component } from 'react';
import styles from '../index.sass';

class Didyouknow extends React.PureComponent {
	render() {
		return(
		<div className="didyouknow">
			<div className="pure-u-1 pure-u-md-1-3 knowFirst">
				<div className="know1">
					<h3> Top 20 Deadliest Jobs in the USA (2014): </h3>
					<ol>
						<li>Logging Workers</li>
						<li>Fishers & Related Fishing Workers</li>
						<li>Aircraft Pilots & Flight Engineers</li>
						<li>Roofers</li>
						<li>Refuse & Recyclable Material Collectors</li>
						<li>Farmers, Ranchers, & Other Agricultural Managers</li>
						<li>Structural Iron & Steel Workers</li>
						<li>Driver/Sales Workers & Truck Drivers</li>
						<li>Electrical Power-Line Installers & Repairers</li>
						<li>Taxi Drivers & Chauffers</li>
						<li>First-Line Supervisors of Construction Trades & Extraction Workers</li>
						<li>Construction Laborers</li>
						<li>First-Line Supervisors of Landscaping, Lawn Service, & Groundskeeping Workers</li>
						<li>Maintenance & Repair Workers</li>
						<li>Police & Sheriff’s Patrol Officers</li>
						<li>Grounds Maintenance Workers</li>
						<li>First-Line Supervisors of Mechanics, Installers, & Repairers</li>
						<li>Painters, Construction, & Maintenance</li>
						<li>Electricians</li>
						<li>Telecommunications Line Installers & Repairers</li>
					</ol>					
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-3 knowSecond">
				<div className="know2">
					<h3> Top 15 Causes of Death in the USA: </h3>
					<ol>
						<li>Heart Disease</li>
						<li>Cancer</li>
						<li>Lung Disease</li>
						<li>Accidents</li>
						<li>Stroke</li>
						<li>Alzheimers</li>
						<li>Diabetes</li>
						<li>Influenza-Pneumonia</li>
						<li>Nephritis/Kidney Disease</li>
						<li>Suicide</li>
						<li>Blood Poisoning</li>
						<li>Liver Disease</li>
						<li>Hypertension/Renal Failure</li>
						<li>Parkinsons</li>
						<li>Homicide</li>
					</ol>			
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-3 knowThird">
				<div className="know3">
					<h3> Who Would This Service Benefit: </h3>
					
				</div>
			</div>
		</div>
	  
		);
	}
}

export default Didyouknow;