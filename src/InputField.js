import React, { useRef } from 'react'
import { ADDUSER } from './actionTypes';
import { useDispatch } from './redux'

const InputField = ({ ...props }) => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	const _handleKeyDown = (e) => {
		if (e.key === "Enter") {
			dispatch({ type: ADDUSER, payload: { username: inputRef.current.value } })
			inputRef.current.value = ""
		}
	}

	return (
		<input onKeyDown={_handleKeyDown} ref={inputRef} {...props}></input>
	)
}

export default InputField