import { counterSlice, decrement, increment } from "./counterSlice";

describe("SLICE", () => {
  test("increment", () => {
    expect(
      counterSlice.reducer(
        {
          value: 1,
        },
        increment()
      )
    ).toEqual({
      value: 2,
    });
  });

  test("decrement", () => {
    expect(
      counterSlice.reducer(
        {
          value: 1,
        },
        decrement()
      )
    ).toEqual({
      value: 0,
    });
  });
});
