import React from 'react';
import { useState } from 'react';
import './ReadMore.css';

const ReadMore = ({ children }) => {
	const text = children;
	const [ isReadMore, setIsReadMore ] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text">
			{isReadMore ? text.slice(0, 35) : text}
			<span onClick={toggleReadMore} className="read-or-hide">
				{isReadMore ? '...read more' : ' ...show less'}
			</span>
		</p>
	);
};

const Content = () => {
	return (
		<div className="container container-ReadMore">
			<ReadMore>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa
				nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.Lorem
				ipsum dolor sit amet consectetur adipisicing elit.
			</ReadMore>

			<ReadMore>
				Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint,
				libero commodi officia aliquam! Maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
				consectetur neque ab porro quasi culpa nulla rerum.
			</ReadMore>
		</div>
	);
};

export default Content;
