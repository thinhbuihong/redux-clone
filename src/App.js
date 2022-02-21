import React, { useMemo, useReducer } from 'react';
import { DECREMENT, INCREMENT } from './actionTypes';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import countReducer from './reducer';

export const AppContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(countReducer, 0);
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch]);


  return (
    <AppContext.Provider value={contextValue}>
      <>
        <div style={{ textAlign: "center", fontSize: "2rem" }}>

          <Counter />
          <Button type={INCREMENT} />
          <Button type={DECREMENT} backgroundColor={"red"} />
        </div>
      </>

    </AppContext.Provider>

  );
}

export default App;
