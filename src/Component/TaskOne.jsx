import React from 'react'
import ProfileImage from "./Images/ProfileImage.png"
import slack from "./Images/slack.png"
import github from "./Images/Icon.png"
import logo from './Images/logo.36d2d48a.png'
import  lastImage from './Images/I4G.png'
import shareButton  from "./Images/_Avatar_share.png"
import InstagramIcon from "./Images/INSTAGRAMICONS.png";

import './TaskOne.css'

const TaskOne =() => {

	// DIRECTION LINKS
	const btn__zuri = "https://training.zuri.team/";
	const books = " http://books.zuri.team";
	const book__python = "https://books.zuri.team/python-for-beginners?";
	const pitch = " https://background.zuri.team, ";
	const book__design = "https://books.zuri.team/design-rules";

	
	

  return (
		<>
			<div className="Container">
				{/*  ===profile section */}
				<main className="Main">
					<div className="profile">
						<img
							className="profile_image"
							id="profile__img"
							src={ProfileImage}
							alt=""
						/>
						
						
						{/* SHARE BUTTON */}
						<h1 className="twitter" id="Twitter">
							Clifftech_Dev
						</h1>
						<h1 className="slack" id="slack">
							Opoku Isaiah Clifford
						</h1>
					</div>
					<button type="button" title="share link ">
						<img
							className="shareButton"
							id="shareButton"
							src={shareButton}
							alt="share button"
						/>
					</button>
					
					{/* BUTTON SECTION LINK SECTION  */}
					<div className="links_section">
						<button id="btn__zuri" className="btn__zuri">
							<a
								className="Twitter_Link"
								href={btn__zuri}
								target={"_blank"}
								rel="noreferrer"
							>
								Twitter Link
							</a>
						</button>
						<button id="books" className="books">
							<a
								className="books_text"
								href={books}
								target={"_blank"}
								rel="noreferrer"
							>
								Zuri Books
							</a>
						</button>
						<button id="Opoku_Isaiah_Clifford" className="book__python">
							<a
								className="book__python_text"
								href={book__python}
								target={"_blank"}
								rel="noreferrer"
							>
								Python Books
							</a>
						</button>

						<button id="pitch" className="pitch">
							<a
								className="pitch_text"
								href={pitch}
								target={"_blank"}
								rel="noreferrer"
							>
								background checks on coders
							</a>
						</button>

						<button id="book__design" className="book__design">
							<a
								className="book__design_text"
								href={book__design}
								target={"_blank"}
								rel="noreferrer"
							>
								Book Design’
							</a>
						</button>
					</div>
					{/* SOCIAL  ICONS  SECTION */}
					<div className="Container ">
						<div className="content">
							<div className="icons">
								<img src={slack} alt="slack" />
								<img src={github} alt="Github" />
							</div>
						</div>
					</div>

					{/* FOOTER SECTION */}
				</main>
				<footer className="footer">
					<div className="content_Footer">
						<img className="logo" src={logo} alt="Github" />
						<h1 className="FooterText">HNG Internship 9 Frontend Task </h1>

						<img className="logo" src={lastImage} alt="Github" />
					</div>
				</footer>
			</div>
		</>
	);
}


export default TaskOne;

