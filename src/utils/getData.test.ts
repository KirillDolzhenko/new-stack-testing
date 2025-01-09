import getData from "./getData";
import axios from "axios";

jest.mock("axios");

describe("getData", () => {
  let response: any;

  beforeAll(() => {
    response = {
      data: [{ id: "5" }, { id: "5" }, { id: "5" }],
    };
  });

  test("axios data mock", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);

    const data = await getData();

    expect(axios.get).toBeCalledTimes(1);
    expect(data).toBe(3);
    expect(data).toMatchSnapshot();
  });
});
