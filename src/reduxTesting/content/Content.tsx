import selectorValue from "@/store/selectors/selectorValue";
import { decrement, increment } from "@/store/slices/counterSlice";
import { AppDispatch } from "@/store/state";
import { useDispatch, useSelector } from "react-redux";

function Content() {
  const value = useSelector(selectorValue);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1 data-testid={"value-counter"}>{value}</h1>
      <button data-testid={"btn-inc"} onClick={() => dispatch(increment())}>
        Inc
      </button>
      <button data-testid={"btn-dec"} onClick={() => dispatch(decrement())}>
        Dec
      </button>
    </div>
  );
}

export default Content;
