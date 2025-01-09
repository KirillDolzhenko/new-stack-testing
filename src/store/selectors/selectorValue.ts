import { RootState } from "../state";

export default function (state: RootState | Object) {
  if ("counter" in state && "value" in state.counter) {
    return state.counter.value;
  }
  return 0;
}
