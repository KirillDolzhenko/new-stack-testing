import delay from "./delay";

describe("Delay", () => {
  test("Delay 1000ms", async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});
