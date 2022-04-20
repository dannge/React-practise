import React from 'react';
import './Users.css';

function User(props) {
	let { name, username, email, street, suite, city } = props;
	return (
		<div className="col-4">
			<div className="cardUser">
				<div className="card-body">
					<h3 className="card-title">{name}</h3>
					<p className="card-text">Username:{username}</p>
					<p className="card-text">Email:{email}</p>
					<p className="card-text">Address:{street}</p>
					<p className="card-text">{suite}</p>
					<p className="card-text">{city}</p>

					<a className="btn btn-primary" href="#">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
export default User;
