import validateValue from "./validateValue";

describe("validateValue", () => {
  test("Валидация значения", () => {
    expect(validateValue(50)).toBe(false);
  });
  test("Валидация значения", () => {
    expect(validateValue(51)).toBe(true);
  });
});
