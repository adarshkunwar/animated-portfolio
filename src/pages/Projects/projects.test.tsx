import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects Component", () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it("should render the projects section", () => {
    const projectsSection = screen.getByTestId("projects");
    expect(projectsSection).toBeInTheDocument();
  });

  it("should display the main heading", () => {
    const heading = screen.getByText(/Featured Projects/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-4xl", "font-bold");
  });

  it("should render all projects", () => {
    const projects = screen.getAllByTestId(/project-\d+/);
    expect(projects).toHaveLength(3); // Expecting 3 projects
  });

  describe("Individual Project Tests", () => {
    it("should render project images", () => {
      const projectImages = screen.getAllByTestId(/project-image-\d+/);
      expect(projectImages).toHaveLength(3);
      projectImages.forEach((image) => {
        expect(image).toHaveAttribute("src");
        expect(image).toHaveClass("w-full", "h-48", "object-cover");
      });
    });

    it("should display project titles", () => {
      expect(screen.getByText("ChatGPT Clone")).toBeInTheDocument();
      expect(screen.getByText("E-Commerce Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Task Management API")).toBeInTheDocument();
    });

    it("should show project descriptions", () => {
      const descriptions = screen.getAllByTestId(/project-description-\d+/);
      expect(descriptions).toHaveLength(3);
      descriptions.forEach((description) => {
        expect(description).toHaveClass("text-gray-600");
        expect(description.textContent).toBeTruthy();
      });
    });

    it("should display technology tags", () => {
      const techStacks = screen.getAllByTestId(/project-tech-\d+/);
      expect(techStacks).toHaveLength(3);
      expect(techStacks[0]).toHaveTextContent(/React/);
      expect(techStacks[1]).toHaveTextContent(/Next.js/);
      expect(techStacks[2]).toHaveTextContent(/Express.js/);
    });

    it("should show project statistics", () => {
      const stars = screen.getAllByTestId(/project-stars-\d+/);
      const forks = screen.getAllByTestId(/project-forks-\d+/);

      expect(stars).toHaveLength(3);
      expect(forks).toHaveLength(3);

      stars.forEach((stat) => expect(stat.textContent).toMatch(/\d+/));
      forks.forEach((stat) => expect(stat.textContent).toMatch(/\d+/));
    });

    it("should render project links", () => {
      const githubLinks = screen.getAllByTestId(/project-github-\d+/);
      const liveLinks = screen.getAllByTestId(/project-live-\d+/);

      expect(githubLinks).toHaveLength(3);
      expect(liveLinks).toHaveLength(3);

      githubLinks.forEach((link) => {
        expect(link).toHaveAttribute("href");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      });

      liveLinks.forEach((link) => {
        expect(link).toHaveAttribute("href");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      });
    });
  });

  it("should have proper grid layout", () => {
    const projectsGrid = screen.getAllByTestId(/project-\d+/)[0].parentElement;
    expect(projectsGrid).toHaveClass(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-3",
    );
  });

  it("should apply hover effects to project cards", () => {
    const projectCards = screen.getAllByTestId(/project-\d+/);
    projectCards.forEach((card) => {
      expect(card).toHaveClass("hover:shadow-md", "transition-shadow");
    });
  });
});
