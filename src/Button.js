import React from 'react'
import { useDispatch } from './redux'

const Button = ({ type, counter,
	backgroundColor = "blue", color = "white" }) => {
	const dispatch = useDispatch()

	return (
		<button style={{
			backgroundColor, color, padding: "0.5rem",
			fontWeight: 'bold', marginRight: "1rem"
		}}
			onClick={() => {
				dispatch({ type, payload: { counter } })
			}}>
			{type}
		</button>
	)
}

export default Button	