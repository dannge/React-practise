import React from 'react';
import error from './images.jpg';
import './error.css';

function ErrorPage() {
	return (
		<div>
			<img className="img-error" src={error} alt="error" />;
			<div className="text-center error-text">Error! PAGE NOT FOUND</div>
		</div>
	);
}

export default ErrorPage;
