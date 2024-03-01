import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../app/features/counterSlice";

export default function CounterAgain() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}> - </button>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        {" "}
        increment by 5 Step
      </button>
    </div>
  );
}
