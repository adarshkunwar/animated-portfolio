import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Component", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("should render the about section", () => {
    const aboutSection = screen.getByTestId("about");
    expect(aboutSection).toBeInTheDocument();
  });

  it("should display the main heading", () => {
    const heading = screen.getByText(/about me/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-4xl", "font-bold");
  });

  it("should render the profile image", () => {
    const image = screen.getByAltText(/profile/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://placehold.co/400x500");
  });

  it("should display the role title", () => {
    const roleTitle = screen.getByText(
      /Full Stack Developer & UI\/UX Enthusiast/i,
    );
    expect(roleTitle).toBeInTheDocument();
    expect(roleTitle).toHaveClass("text-2xl", "font-semibold");
  });

  it("should contain bio sections", () => {
    const bioIntro = screen.getByTestId("bio-intro");
    const bioDetail = screen.getByTestId("bio-detail");
    const bioInterests = screen.getByTestId("bio-interests");

    expect(bioIntro).toBeInTheDocument();
    expect(bioDetail).toBeInTheDocument();
    expect(bioInterests).toBeInTheDocument();

    // Verify content of bio sections
    expect(bioIntro).toHaveTextContent(/passionate developer/i);
    expect(bioDetail).toHaveTextContent(/journey in tech/i);
    expect(bioInterests).toHaveTextContent(/when i'm not coding/i);
  });

  it("should display technical skills", () => {
    const skillsList = screen.getByTestId("skills-list");
    expect(skillsList).toBeInTheDocument();

    const skills = [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "MongoDB",
      "Docker",
    ];
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("should have proper layout structure", () => {
    const aboutSection = screen.getByTestId("about");
    expect(aboutSection).toHaveClass("min-h-screen", "bg-gray-50");
  });

  it("should style skill tags correctly", () => {
    const firstSkill = screen.getByText("React");
    expect(firstSkill).toHaveClass(
      "px-4",
      "py-2",
      "bg-gray-100",
      "text-gray-700",
      "rounded-full",
    );
  });
});
