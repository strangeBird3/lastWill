import React, { Component } from 'react';
import styles from '../index.sass';

class Whattodo extends React.PureComponent {
	render() {
		return(
		<div className="Whattodo">
			<div className="pure-u-1 pure-u-md-1-1 whatContent">
				<div className="whatFirst">
					<h2> What to do... </h2>
					<p>The death of a loved one, whether it’s something that you have been 
					preparing for or whether it’s totally unexpected, is never an easy task 
					to deal with.  One of the biggest questions when someone dies is “now what?”  
					Below is a list of things that one should do when the death of a loved one 
					has occurred.</p>
					<ul>
						<li><span className="highlighterBlue">If the individual dies</span> in a hospital or hospice, the medical personnel 
						will take the lead on "next steps" although they will want to know which 
						mortuary or funeral home should be called at the appropriate time. If the 
						individual dies at home, call the paramedics or the police so that the proper 
						pronouncement of death can be made.</li>
						<li><span className="highlighterBlue">Notify family and friends.</span> You may want to consider having family members 
						contact others to save yourself some time on the phone during a stressful period.  
						Also, <span className="highlighterBlue">notify the Clergy.</span> Contact the deceased's Pastor, Rabbi, Priest or other 
						designated religious leader if there is one in order to facilitate counseling 
						for family members and members of the deceased's congregation, synagogue or parish. 
						They will also be involved in making arrangements for any final religious services.</li>
						<li><span className="highlighterBlue">Contact a funeral home</span> concerning burial or cremation arrangements. Determine if 
						the Decedent belonged to a burial or memorial society that may make 
						special arrangements for the funeral, such as military honor guards.</li>
						<li><span className="highlighterBlue">If a doctor is not present</span>, notify a doctor or coroner in order 
						to obtain a death certificate.  Typically, you will need multiple 
						copies of an original death certificate for taking care of the Decedant’s 
						final wishes & estate (if you are already working with a funeral home, 
						the funeral director should be able to assist you in making arrangements for this). </li>
						<li><span className="highlighterBlue">Handle the care</span> of any dependents and/or pets.</li>
						<li><span className="highlighterBlue">Prepare</span> an obituary.</li>
						<li><span className="highlighterBlue">***Find important documents</span> – this can be a very daunting, exhaustive, & 
						frustrating task.  This is where This Should Help will be of great assistance to you.</li>
						<li><span className="highlighterBlue">Call</span> the decedent’s employer.</li>
						<li><span className="highlighterBlue">Notify the local office</span> of the Social Security Administration.</li>
						<li><span className="highlighterBlue">Don’t be hesitant</span> to accept a helping hand.  This is a trying time for all and there will more than likely 
						be an outpouring of support from family & friends.  Many will ask if there is anything that they can do to help 
						(although not all of them may be sincere in asking), and would be greatful for an opportunity to assist, even 
						if in a trivial way.  You have enough to worry about & take care of at this time, so when someone asks if 
						there is anything that they can do to help, perhaps one of the following would be one less thing that 
						you have to worry about:
						<ol>
							<li><span className="highlighterGrey">Answering</span> the phone </li>
							<li><span className="highlighterGrey">Collecting</span> mail </li>
							<li><span className="highlighterGrey">Caring</span> for pets</li>
							<li><span className="highlighterGrey">Staying at home</span> during the wake, funeral, or memorial services to guard against break-ins 
							that commonly occur during that time </li>
							<li><span className="highlighterGrey">Organizing food</span> for family & friends for after the services </li>
						</ol>
						</li>
					</ul>
					<br />
					<p>While this list has been compiled from subject matter experts from around the country, it may not be all 
						inclusive to your specific needs & situation.  You should consult with a local subject matter expert in your 
						area (attorney, funeral director, etc.) for more detailed information & protocols/procedures.</p>
				</div>
			</div>
		</div>
	  
		);
	}
}

export default Whattodo;