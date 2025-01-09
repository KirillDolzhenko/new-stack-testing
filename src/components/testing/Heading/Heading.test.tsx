import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("Hello component", () => {
  it("renders with the correct name", () => {
    render(<Heading person="Next.js!" />);
    const heading = screen.getByText(/Hello, Next.js!/);
    expect(heading).toBeInTheDocument();
  });

  it("renders dynamic names correctly", () => {
    render(<Heading person="TypeScript!" />);
    const heading = screen.getByText(/Hello, TypeScript!/);
    expect(heading).toBeInTheDocument();
  });
});
