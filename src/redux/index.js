import { useContext, useState } from "react";
import { AppContext } from "../App2";

export const createStore = (reducer, initialState) => {
	let listeners = [];
	let currentState = initialState;

	return {
		getState: () => currentState,
		dispatch: (action) => {
			currentState = reducer(currentState, action);

			listeners.forEach((listener) => {
				listener();
			});
		},
		subscribe: (newListener) => {
			listeners.push(newListener);

			const unsubscribe = () => {
				listeners = listeners.filter((l) => l !== newListener);
			};

			return unsubscribe;
		}
	};
};

export const useDispatch = () => {
	return useContext(AppContext).dispatch
}

export const useSelector = (selector) => {
	const [state, setState] = useState(0);
	const { getState, subscribe } = useContext(AppContext);

	subscribe(() => {
		setState(state + 1)
	})

	return selector(getState())
}

export const combineReducers = reducers => {
	return (state, action) => {
		return Object.keys(reducers).reduce(
			(acc, prop) => {
				return ({
					...acc,
					[prop]: reducers[prop](acc[prop], action),
				})
			},
			state
		)
	}
}