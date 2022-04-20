import React from 'react';
import './Postimage.css';

export default function Postimage(props) {
	return (
		<div>
			<img className="Postimage-img" src={props.img} alt="" />
		</div>
	);
}
