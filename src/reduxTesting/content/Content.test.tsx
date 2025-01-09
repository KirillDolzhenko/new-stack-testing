import { getByTestId, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Content from "./Content";
import { createStore } from "@/store/state";
import userEvent from "@testing-library/user-event";
import renderWithRedux from "@/helpers/renderWithRedux";
import renderWithAll from "@/helpers/renderWithAll";

describe("CONTENT", () => {
  test("counter", async () => {
    renderWithRedux({
      counter: {
        value: 10,
      },
    });

    const incBtn = screen.getByTestId("btn-inc");
    const decBtn = screen.getByTestId("btn-dec");

    await userEvent.click(incBtn);

    expect(screen.getByTestId("value-counter")).toHaveTextContent("11");

    await userEvent.click(decBtn);

    expect(screen.getByTestId("value-counter")).toHaveTextContent("10");
  });

  test("with router", async () => {
    renderWithAll("/about", {
      counter: {
        value: 10,
      },
    });

    const incBtn = screen.getByTestId("btn-inc");

    await userEvent.click(incBtn);

    expect(screen.getByTestId("value-counter")).toHaveTextContent("11");
    expect(screen.getByTestId("page-about")).toBeInTheDocument();
  });

  //TODO: Mock Values
});
