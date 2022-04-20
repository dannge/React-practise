import React from 'react';

function LearningCode({ id, lang, img, status, changeStatus }) {
	return (
		<div className="col-4 p-3">
			<div className="card">
				<img src={img} className="card-img-top p-2" alt="img" />
				<div className="card-body text-center">
					<p className="card-text text-info">{lang}</p>
					<p>{status ? 'Išmokau' : 'Mokausi'}</p>
					<button onClick={() => changeStatus(id)} className="btn btn-secondary text-info">
						OK
					</button>
				</div>
			</div>
		</div>
	);
}

export default LearningCode;
