import React from 'react';
import './Comments.css';

function Comment(props) {
	let { name, email, body } = props;
	return (
		<div className="col-4">
			<div className="cardComment">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{email}</p>
					<p className="card-text">{body}</p>
					<a className="btn btn-primary" href="#">
						coment
					</a>
				</div>
			</div>
		</div>
	);
}
export default Comment;
