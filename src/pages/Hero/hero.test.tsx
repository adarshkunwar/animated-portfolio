import Hero from "./Hero";
import { render, screen } from "@testing-library/react";

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it("should render the hero component", () => {
    const hero = screen.getByTestId("hero");
    expect(hero).toBeInTheDocument();
  });

  it("should contain all required text content", () => {
    const hero = screen.getByTestId("hero");

    // Check for presence of all text content, case-insensitive
    expect(hero).toHaveTextContent(/hey/i);
    expect(hero).toHaveTextContent(/my name is/i);
    expect(hero).toHaveTextContent(/adarsh/i);
    expect(hero).toHaveTextContent(/you can call me/i);
    expect(hero).toHaveTextContent(/alex/i);
  });

  it("should have proper heading structure", () => {
    // Check for main heading
    const mainHeading = screen.getByText(/hey/i);
    expect(mainHeading).toHaveClass("text-5xl", "md:text-7xl", "font-bold");
  });

  it("should have properly styled name spans", () => {
    // Check for name spans with gradient styling
    const adarshSpan = screen.getByText(/adarsh/i);
    const alexSpan = screen.getByText(/alex/i);

    expect(adarshSpan).toHaveClass(
      "text-transparent",
      "bg-clip-text",
      "bg-gradient-to-r",
      "font-semibold",
    );
    expect(alexSpan).toHaveClass(
      "text-transparent",
      "bg-clip-text",
      "bg-gradient-to-r",
      "font-semibold",
    );
  });

  it("should render call-to-action buttons", () => {
    const getInTouchButton = screen.getByText(/get in touch/i);
    const viewWorkButton = screen.getByText(/view work/i);

    expect(getInTouchButton).toBeInTheDocument();
    expect(viewWorkButton).toBeInTheDocument();
  });

  it("should have proper responsive container classes", () => {
    const hero = screen.getByTestId("hero");
    expect(hero).toHaveClass(
      "min-h-screen",
      "flex",
      "items-center",
      "justify-center",
    );
  });
});
