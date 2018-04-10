import React, { Component } from 'react';
import styles from '../index.sass';

class Whattodo extends React.PureComponent {
	render() {
		return(
		<div className="Whattodo">
			<div className="pure-u-1 pure-u-sm-1-1 homeContent">
				<div className="whatContent">
					<h2> What to do? </h2>
					<p>The death of a loved one, whether it’s something that you have been 
					preparing for or whether it’s totally unexpected, is never an easy task 
					to deal with.  One of the biggest questions when someone dies is “now what?”  
					Below is a list of things that one should do when the death of a loved one 
					has occurred.</p>
					<h3>---</h3>
					<ul>
						<li>If the individual dies in a hospital or hospice, the medical personnel 
						will take the lead on "next steps" although they will want to know which 
						mortuary or funeral home should be called at the appropriate time. If the 
						individual dies at home, call the paramedics or the police so that the proper 
						pronouncement of death can be made.</li>
						<li>Notify family and friends. You may want to consider having family members 
						contact others to save yourself some time on the phone during a stressful period.  
						Also, notify the Clergy. Contact the deceased's Pastor, Rabbi, Priest or other 
						designated religious leader if there is one in order to facilitate counseling 
						for family members and members of the deceased's congregation, synagogue or parish. 
						They will also be involved in making arrangements for any final religious services.</li>
						<li>Contact a funeral home concerning burial or cremation arrangements. Determine if 
						the Decedent belonged to a burial or memorial society that may make 
						special arrangements for the funeral, such as military honor guards.</li>
						<li>If a doctor is not present, notify a doctor or coroner in order 
						to obtain a death certificate.  Typically, you will need multiple 
						copies of an original death certificate for taking care of the Decedant’s 
						final wishes & estate (if you are already working with a funeral home, 
						the funeral director should be able to assist you in making arrangements for this). </li>
						<li>Handle the care of any dependents and/or pets</li>
						<li>Prepare an obituary</li>
						<li>Find important documents – this can be a very daunting, exhaustive, & 
						frustrating task.  This is where This Should Help will be of great assistance to you.</li>
						<li>Call the Decedent’s employer</li>
						<li>Notify the local office of the Social Security Administration</li>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
	  
		);
	}
}

export default Whattodo;