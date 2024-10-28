
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("loads and displays greeting", () => {
  it("displays greeting message", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toHaveTextContent("Hello, world!");
  });
});
