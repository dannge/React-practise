import React from 'react';
import './Post.css';

function Post(props) {
	let { title, body } = props;

	return (
		<div className="col-4">
			<div className="cardPost">
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{body}</p>
					<a className="btn btn-primary" href="#">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
export default Post;
