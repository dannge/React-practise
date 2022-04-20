import React from 'react';
import PostContent from './PostContent';
import { v4 as uuidv4 } from 'uuid';

function PostList() {
	let posts = [
		{
			title: 'kava',
			content: 'Lorem ipsum HTML',
			img:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUZIFFqNSsIMtTeTioS2T8ruiK4Pr3fF_E14k8MMSvHGstg31FilF6BiUjsOyJrs5qz8&usqp=CAU'
		},

		{
			title: 'CSS',
			content: 'Lorem ipsum HTML',
			img:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhyMuXfPt8Wso2_pJUOhJRr2fiAJC_e89ko1_JnyK5z47adbIwzpBGmPTWqmh69YAMVY&usqp=CAU'
		},
		{
			title: 'jAVASCRIPT',
			content: 'Lorem ipsum JS',
			img:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-PF0TevcKB2nG6AKBDRvNjDWMCUUJPePBx77JO6fYeGtsA19jj2oLD6CBjMou_bvEvM&usqp=CAU'
		}
	];

	let list = posts.map((post) => {
		return <PostContent key={uuidv4()} title={post.title} content={post.content} img={post.img} />;
	});
	return <div className="row">{list}</div>;
}
export default PostList;
