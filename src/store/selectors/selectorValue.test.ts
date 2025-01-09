import selectorValue from "./selectorValue";

describe("SELECTOR", () => {
  test("init empty value", () => {
    expect(selectorValue({})).toBe(0);
  });

  test("init value", () => {
    expect(
      selectorValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
