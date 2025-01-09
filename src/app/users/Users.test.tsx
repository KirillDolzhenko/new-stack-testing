import { render, screen } from "@testing-library/react";
import Users, { IUser } from "./Users";
import axios from "axios";
import renderWithRouter from "@/helpers/renderWithRouter";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

describe("Users", () => {
  let response: { data: IUser[] } = { data: [] };

  beforeAll(() => {
    response.data = [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }];
  });

  test("Render test", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    renderWithRouter("/users");

    expect((await screen.findAllByTestId("user")).length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("Render test", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    renderWithRouter("/users");

    expect((await screen.findAllByTestId("user")).length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("User page", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    renderWithRouter("/users");

    let users = await screen.findAllByTestId("user");

    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);

    await userEvent.click(users[0]);

    expect(screen.getByTestId("page-user")).toBeInTheDocument();
  });
});
