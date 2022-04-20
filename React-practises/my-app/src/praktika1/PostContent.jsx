import React from 'react';

export default function PostContent(props) {
	let { title, content, img } = props;
	console.log(img);
	return (
		<div className="col-4">
			<div>
				<h3 className="PostConten-heading">{props.heading}</h3>
				<p className="PostConten-paragraph">{props.paragraph}</p>
			</div>
			<div>
				<h3>{title}</h3>
				<img src={img} alt={title} />
				<p>{content}</p>
			</div>
		</div>
	);
}
