import React from "react";

const Fetch = () => {
	const [data, setData] = React.useState(null);
	let fetchUsers = async () => {
		const users = await fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.log(err, "error");
			});
		return users;
	};
	return (
		<>
			<h1>hello</h1>
			{data ? (
				data.map((user) => (
					<div key={user.id}>
						<h2>{user.name}</h2>
						<p>{user.email}</p>
					</div>
				))
			) : (
				<button onClick={fetchUsers}>fetch users</button>
			)}
		</>
	);
};

export default Fetch;
