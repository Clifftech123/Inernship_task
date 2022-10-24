import React from 'react'
import ProfileImage from "./Images/ProfileImage.png"
import './TaskOne.css'

const TaskOne =() => {

  return (
		<>
			<div className="Container">
				<main className="Main">
					{/* IMAGE */}
					<div className="profile" >
						<img className="profile_image"  id="profile__img" src={ProfileImage} alt="" />
						<h1 className='twitter' id='Twitter'> Clifftech_Dev</h1>
            {/* SLACK NAME */}
            <h1   className='slack' id='slack'> Opoku Isaiah Clifford</h1>
					</div>
				</main>
			</div>
		</>
	);
}


export default TaskOne;

