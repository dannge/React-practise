import React from 'react';
import { useState } from 'react';
import './Card.css';

function Card() {
	const [ title, setTitle ] = useState(false);
	const [ theme, setTheme ] = useState(false);
	const [ name, setName ] = useState(false);

	function changeTitle() {
		setTitle(!title);
	}
	function changeTheme() {
		setTheme(!theme);
	}

	function changeName() {
		setName(!name);
	}

	return (
		<div>
			<div className="Card">
				<div className="card-body">
					<h5 className="card-title">{title ? 'Task is done!' : 'Task is not done!'}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's
						content.Some quick example text to build on the card title and make up the bulk of the card's
						content.2
					</p>

					<button
						className={theme ? 'btn-success' : 'btn-danger'}
						onClick={() => {
							changeTitle();
							changeTheme();
							changeName();
						}}
						type="button"
					>
						{name ? 'Done' : 'Mark as done'}
					</button>
				</div>
			</div>
		</div>
	);
}
export default Card;
