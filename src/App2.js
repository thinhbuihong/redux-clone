import React from 'react';
import { DECREMENT, INCREMENT } from './actionTypes';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import InputField from './InputField';
import { counterReducer, usersReducer } from './reducer';
import { combineReducers, createStore } from './redux';
import Usernames from './Usernames';

export const AppContext = React.createContext();

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer
})
const store = createStore(rootReducer, {
  counter: { value: 3 },
  users: []
});

function App() {
  // const store = useCallback(createStore(countReducer), []);
  return (
    <AppContext.Provider value={store}>
      <>
        <div style={{ textAlign: "center", fontSize: "2rem" }}>
          <Counter reducer="counter" />
          <Button type={INCREMENT} />
          <Button type={DECREMENT} backgroundColor={"red"} />

          <hr />
          <InputField placeholder="input username" />
          <Usernames />
        </div>
      </>

    </AppContext.Provider>

  );
}

export default App;
