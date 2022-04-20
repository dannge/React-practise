import React from 'react';
import './Header.css';

export default function Header(props) {
	return (
		<div>
			<h1 className="Header-page-title">{props.title}</h1>
			<img className="Header-page-image" src={props.image} alt="" />
		</div>
	);
}
