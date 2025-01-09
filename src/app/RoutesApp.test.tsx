import { render, screen } from "@testing-library/react";
import RoutesApp from "./RoutesApp";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import renderWithRouter from "@/helpers/renderWithRouter";

describe("Router", () => {
  test("Links", async () => {
    render(
      <MemoryRouter>
        <RoutesApp />
      </MemoryRouter>
    );

    const linkMain = screen.getByTestId("link-main");
    const linkAbout = screen.getByTestId("link-about");

    expect(screen.getByTestId("page-main")).toBeInTheDocument();
    await userEvent.click(linkAbout);
    expect(screen.getByTestId("page-about")).toBeInTheDocument();
    await userEvent.click(linkMain);
    expect(screen.getByTestId("page-main")).toBeInTheDocument();
  });

  test("Error Page", () => {
    renderWithRouter("/unexisting");

    expect(screen.getByTestId("page-error")).toBeInTheDocument();
  });
});
