import powNum from "./powNum";

describe("powNum", () => {
  test("Number of calling with 2", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    powNum(2);

    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("Number of calling with 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    powNum(1);

    expect(spyMathPow).toBeCalledTimes(0);
  });
});
