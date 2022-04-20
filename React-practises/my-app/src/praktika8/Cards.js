import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaAngleDoubleRight } from 'react-icons/fa';
import './Cards.css'

function Cards({ id, login, nodeID, url, avatarUrl }) {
	return (
		<>
    
			<div className="col-lg-4 card-person text-center">
				<img
					src={avatarUrl}
					className="bd-placeholder-img rounded-circle"
					width="170"
					height="170"
					aria-label="Placeholder: 170*170"
					focusable="false"
				>
					
				</img>

				<h2>Login: {login}</h2>
				<p>Node ID:{nodeID}</p>
				<p>
					<a className="btn btn-primary" href={url}>
						View details <FaAngleDoubleRight />
					</a>
				</p>
			</div>
      </>
	
	);
}

export default Cards;
