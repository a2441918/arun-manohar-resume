import React from 'react';
import {connect} from 'react-redux';
import {map, uniqueId} from 'lodash';
import profilePic from '../../../images/profile.jpg';
import resume from '../../../files/ArunManoharResume.pdf';

const element = document.createElement('div');
document.body.appendChild(element);

const About = (props) => {

	const summary = props.content.summary.split('\n');

	return (
		<section id='about'>
			<div className='row'>
				<div className='two columns'>
					<img className='profile-pic' src={profilePic} alt={props.content.name}/>
				</div>
				<div className='ten columns main-col'>
					<h2>About Me</h2>
					{map(summary, (content) => {
						return (
							<p key={uniqueId()}>
								{content}
							</p>
						);
					})}
					<div className='row'>
						<div className='columns contact-details'>
							<h2>Contact Details</h2>
							<p className='address'>
								<span>{props.content.location.city}</span>
								<br/>
								<span>{props.content.location.region + ', ' + props.content.location.postalCode}</span>
								<br/>
								<span>{props.content.location.countryCode}</span>
								<br/>
								<a href={'skype:' + props.content.phone}>
									<span>{props.content.phone}</span>
								</a>
								<br/>
								<a href={'mailto:' + props.content.email}>
									<span>{props.content.email}</span>
								</a>
							</p>
						</div>
						<div className='columns download'>
							<p>
								<a href={resume} download={'Arun-Manohar-Resume.pdf'}
								   className='button'>
									<i className='fa fa-download'>{''}</i>
									Download Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = state => ({content: state.resumeDataReducer.data.basics});

export default connect(mapStateToProps)(About);
