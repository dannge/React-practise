import React, { useEffect, useState } from 'react';
import User from './User';

function UsersList(props) {
	/* let { data: users } = props; */
	let [ users, setUsers ] = useState('');

	const getData = async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
		const data = await response.json();
		console.log(data);
		setUsers(data);
	};

	useEffect(() => {
		getData();
	}, []);

	let list;
	if (users) {
		list = users.map((user) => {
			return (
				<User
					key={user.id}
					name={user.name}
					username={user.username}
					email={user.email}
					street={user.address.street}
					suite={user.address.suite}
					city={user.address.city}
				/>
			);
		});
	}

	return <div className="row">{list}</div>;
}

export default UsersList;
