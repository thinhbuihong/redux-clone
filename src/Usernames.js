import React from 'react'
import { useSelector } from './redux'

const Usernames = () => {
	const usernames = useSelector(state => state.users);

	return (
		<ul>
			{usernames.length > 0 && usernames.map((username, i) =>
				<li key={i}>{username}</li>
			)}
		</ul>
	)
}

export default Usernames