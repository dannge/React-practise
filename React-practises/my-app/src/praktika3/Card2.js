import React from 'react';
import { useState } from 'react';
import './Card2.css';

function Card2() {
	const [ like, setLike ] = useState(0);
	const [ dislike, setDislike ] = useState(0);
	function countLike() {
		setLike(like + 1);
	}
	function countDislike() {
		setDislike(dislike + 1);
	}
	function reset() {
		setLike(0);
		setDislike(0);
	}
	return (
		<div>
			<div className="Card2">
				<img
					src="https://images.pexels.com/photos/7194486/pexels-photo-7194486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					className="card-img-top"
					alt="img-top"
				/>
				<div className="Card-body">
					<h5 className="Card-title">Beauty of Nature</h5>
					<p className="Card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
					<button className="btn btn-success" onClick={countLike}>
						LIKE {like}
					</button>
					<button className="btn btn-danger" onClick={countDislike}>
						DISLIKE {dislike}
					</button>
					<button className="btn btn-info" onClick={reset}>
						RESET
					</button>
				</div>
			</div>
		</div>
	);
}
export default Card2;
