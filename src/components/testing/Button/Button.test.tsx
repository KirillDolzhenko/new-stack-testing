import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button tsx", () => {
  test("Element mounted", () => {
    render(<Button />);
    const btn = screen.getByText(/button/i);
    const btnAlso = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/print text/i);

    expect(btn).toBeInTheDocument();
    expect(btnAlso).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    expect(btn).toMatchSnapshot();

    // screen.debug();
  });
});
