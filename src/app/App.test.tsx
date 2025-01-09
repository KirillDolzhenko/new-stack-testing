import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Is Data here", async () => {
    const span = await screen.findByText(/data/i, undefined, {
      timeout: 5000,
    });

    expect(span).toBeInTheDocument();
  });

  test("State testing", () => {
    const btn = screen.getByTestId("state-btn");
    expect(btn).toBeInTheDocument();

    let span = screen.queryByTestId("state-span");
    expect(span).toBeNull();

    fireEvent.click(btn);

    span = screen.queryByTestId("state-span");
    expect(span).toBeInTheDocument();
  });

  test("Input", async () => {
    const input = screen.getByTestId("val-input");
    expect(screen.queryByTestId("val-h1")).toContainHTML("");

    await fireEvent.input(input, {
      target: {
        value: "some text",
      },
    });

    expect(screen.queryByTestId("val-h1")).toContainHTML("some text");

    await userEvent.clear(input);
    await userEvent.type(input, "text 2");

    expect(screen.queryByTestId("val-h1")).toContainHTML("text 2");
  });
});
