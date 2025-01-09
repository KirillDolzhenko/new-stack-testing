import mapNum from "./mapNum";

describe("mapNum", () => {
  test("Test #1: Common values", () => {
    expect(mapNum(1, 3, 4)).toEqual(["1", "3", "4"]);
  });
  test("Test #2: Empty array", () => {
    expect(mapNum()).toEqual([]);
  });
  test("Test #2: Empty array", () => {
    expect(mapNum(1, "some", 2)).not.toEqual([1, 2, 3]);
  });
});
