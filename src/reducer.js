import { ADDUSER, DECREMENT, INCREMENT } from "./actionTypes";

export const counterReducer = (state = { value: 0 }, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				value: state.value + 1
			};

		case DECREMENT:
			return {
				...state,
				value: state.value - 1
			}

		default:
			return { ...state };
	}
}

export const usersReducer = (state = [], action) => {
	switch (action.type) {
		case ADDUSER:
			return [...state, action.payload.username];

		default:
			return [...state]
	}
}