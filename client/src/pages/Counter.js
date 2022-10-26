import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
  addByAmount,
} from "../features/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setincrementAmount] = useState("");

  const resetAll = () => {
    setincrementAmount(0);
    dispatch(reset());
  };
  return (
    <main className="flex flex-col justify-center items-center">
      <p className="my-7 h-auto w-auto p-4 border-2 border-black">{count}</p>

      <div className="flex justify-center">
        <button
          className="btn btn-blue mx-1"
          onClick={() => dispatch(increment(count))}
        >
          +
        </button>
        <button
          className="btn bg-red-600 text-white"
          onClick={() => dispatch(decrement(count))}
        >
          -
        </button>
        <input
          type="number"
          value={incrementAmount}
          onChange={(event) => setincrementAmount(event.target.value)}
          className=" w-56 mx-4 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Insert an increment value"
        />
        <button
          className="btn bg-green-400"
          onClick={() => dispatch(addByAmount(Number(incrementAmount)))}
        >
          Add
        </button>
        <button className="btn bg-yellow-400 mx-1" onClick={resetAll}>
          Reset
        </button>
      </div>
    </main>
  );
}

export default Counter;
