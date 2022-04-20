import React from 'react';
import Comment from './Comment';

function CommentsList(props) {
	let { data: comments } = props;

	let list = comments.map((comment) => {
		return <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />;
	});

	return <div className="row">{list}</div>;
}

export default CommentsList;
