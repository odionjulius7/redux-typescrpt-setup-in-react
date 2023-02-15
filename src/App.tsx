import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks/useTypeSelector";
import logo from "./logo.svg";
import "./App.css";
import { decrement, increment } from "./features/myFeatureReducer/reducerSlice";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.count);
  useEffect(() => {
    console.log("Component re-rendered with new count:", count);
  }, [count]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
