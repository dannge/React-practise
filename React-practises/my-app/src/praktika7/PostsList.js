import React from 'react';
import Post from './Post';

function PostsList(props) {
	let { data: posts } = props;

	let list = posts.map((post) => {
		return <Post key={post.id} title={post.title} body={post.body} />;
	});
	return <div className="row">{list}</div>;
}
export default PostsList;
