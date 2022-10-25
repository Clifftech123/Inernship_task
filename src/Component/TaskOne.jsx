import React from 'react'
import ProfileImage from "./Images/ProfileImage.png"
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
						<h1 className="twitter" id="Twitter">
							{" "}
							Clifftech_Dev
						</h1>
						<h1 className="slack" id="slack">
							{" "}
							Opoku Isaiah Clifford
						</h1>
					</div>

					{/* BUTTON SECTION */}
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
				</main>
			</div>
		</>
	);
}


export default TaskOne;

