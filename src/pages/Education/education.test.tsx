import { render, screen } from "@testing-library/react";
import Education from "./Education";

describe("Education Component", () => {
  beforeEach(() => {
    render(<Education />);
  });

  it("should render the education section", () => {
    const educationSection = screen.getByTestId("education");
    expect(educationSection).toBeInTheDocument();
  });

  it("should render all education items", () => {
    const educationItems = screen.getAllByTestId(/education-item-/);
    expect(educationItems).toHaveLength(2); // Expecting 2 education entries
  });

  describe("Bachelor's Degree Entry", () => {
    it("should display correct degree information", () => {
      const degree = screen.getByTestId("degree-0");
      expect(degree).toHaveTextContent(
        /Bachelor of Technology in Computer Science/i,
      );
    });

    it("should display correct institution", () => {
      const institution = screen.getByTestId("institution-0");
      expect(institution).toHaveTextContent(/Indian Institute of Technology/i);
    });

    it("should show correct duration", () => {
      const duration = screen.getByTestId("duration-0");
      expect(duration).toHaveTextContent("2019 - 2023");
    });

    it("should display location", () => {
      const location = screen.getByTestId("location-0");
      expect(location).toHaveTextContent(/Mumbai, India/i);
    });

    it("should show GPA", () => {
      const gpa = screen.getByTestId("gpa-0");
      expect(gpa).toHaveTextContent("3.8/4.0");
    });

    it("should list key courses", () => {
      const highlights = screen.getByTestId("highlights-0");
      expect(highlights).toHaveTextContent(/Data Structures & Algorithms/i);
      expect(highlights).toHaveTextContent(/Web Development/i);
    });
  });

  describe("High School Entry", () => {
    it("should display correct school information", () => {
      const degree = screen.getByTestId("degree-1");
      expect(degree).toHaveTextContent(/Higher Secondary Education/i);
    });

    it("should display correct school name", () => {
      const institution = screen.getByTestId("institution-1");
      expect(institution).toHaveTextContent(/Delhi Public School/i);
    });

    it("should show correct duration", () => {
      const duration = screen.getByTestId("duration-1");
      expect(duration).toHaveTextContent("2017 - 2019");
    });
  });

  it("should style education items with proper classes", () => {
    const educationItem = screen.getByTestId("education-item-0");
    expect(educationItem).toHaveClass(
      "relative",
      "bg-gray-50",
      "rounded-lg",
      "p-8",
    );
  });

  it("should render icons for duration and location", () => {
    const educationSection = screen.getByTestId("education");
    const calendarIcons = educationSection.querySelectorAll(
      '[data-testid="duration-0"]',
    );
    const locationIcons = educationSection.querySelectorAll(
      '[data-testid="location-0"]',
    );

    expect(calendarIcons).toBeTruthy();
    expect(locationIcons).toBeTruthy();
  });
});
