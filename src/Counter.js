import React, { useEffect, useRef } from 'react';
import { useSelector } from './redux';
// import { AppContext } from './App'

const Counter = ({ reducer }) => {
	const color = useRef("black");

	const state = useSelector(state => state[reducer]);

	useEffect(() => {
		color.current = "#" + Math.floor(Math.random() * 16777215).toString(16);
	}, [state.value])

	return (
		<p style={{
			color: color.current,
		}}>{state.value}</p>
	)
}

export default Counter