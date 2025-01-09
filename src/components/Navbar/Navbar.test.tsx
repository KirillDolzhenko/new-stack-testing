import renderWithRouter from "@/helpers/renderWithRouter";
import Navbar from "./Navbar";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { IUser } from "@/app/users/Users";

jest.mock("axios");

describe("NAVBAR", () => {
  let response: { data: IUser[] } = { data: [] };

  beforeAll(() => {
    response.data = [
      {
        name: "Name1",
      },
      {
        name: "Name2",
      },
      {
        name: "Name3",
      },
    ];
  });

  test("Link about", async () => {
    renderWithRouter("/", <Navbar />);

    const linkAbout = screen.getByTestId("link-about");
    await userEvent.click(linkAbout);

    expect(screen.getByTestId("page-about"));
  });

  test("Link users", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    renderWithRouter("/", <Navbar />);

    const linkUsers = screen.getByTestId("link-users");

    await userEvent.click(linkUsers);

    expect((await screen.findAllByTestId("user")).length).toBeGreaterThan(0);
  });
});
