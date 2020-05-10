import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions/index";

const Home = () => {
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div>
        <h3>Count: {currentState.change.count}</h3>
      </div>
      <div>
        <button onClick={() => dispatch(action.increment())}>+</button>
        <button onClick={() => dispatch(action.increaseByNumber(5))}>
          Add 5
        </button>
        <button onClick={() => dispatch(action.decrement())}>-</button>
      </div>
    </div>
  );
};

export default Home;
