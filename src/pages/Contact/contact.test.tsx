import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact Component", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("should render the contact section", () => {
    const contactSection = screen.getByTestId("contact");
    expect(contactSection).toBeInTheDocument();
  });

  it("should display the main heading", () => {
    const heading = screen.getByText(/Get In Touch/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-4xl", "font-bold");
  });

  describe("Contact Information", () => {
    it("should display email information", () => {
      const emailInfo = screen.getByTestId("email-info");
      expect(emailInfo).toBeInTheDocument();
      expect(emailInfo).toHaveTextContent("youremail@example.com");
    });

    it("should display phone information", () => {
      const phoneInfo = screen.getByTestId("phone-info");
      expect(phoneInfo).toBeInTheDocument();
      expect(phoneInfo).toHaveTextContent("+1 (234) 567-890");
    });

    it("should render social media links", () => {
      const githubLink = screen.getByTestId("github-link");
      const linkedinLink = screen.getByTestId("linkedin-link");

      expect(githubLink).toHaveAttribute(
        "href",
        "https://github.com/yourusername",
      );
      expect(linkedinLink).toHaveAttribute(
        "href",
        "https://linkedin.com/in/yourusername",
      );
    });
  });

  describe("Contact Form", () => {
    it("should render all form inputs", () => {
      expect(screen.getByTestId("name-input")).toBeInTheDocument();
      expect(screen.getByTestId("email-input")).toBeInTheDocument();
      expect(screen.getByTestId("subject-input")).toBeInTheDocument();
      expect(screen.getByTestId("message-input")).toBeInTheDocument();
      expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    });

    it("should update input values on change", () => {
      const nameInput = screen.getByTestId("name-input");
      const emailInput = screen.getByTestId("email-input");
      const subjectInput = screen.getByTestId("subject-input");
      const messageInput = screen.getByTestId("message-input");

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
      fireEvent.change(messageInput, { target: { value: "Test Message" } });

      expect(nameInput).toHaveValue("John Doe");
      expect(emailInput).toHaveValue("john@example.com");
      expect(subjectInput).toHaveValue("Test Subject");
      expect(messageInput).toHaveValue("Test Message");
    });

    it("should handle form submission", async () => {
      const nameInput = screen.getByTestId("name-input");
      const emailInput = screen.getByTestId("email-input");
      const subjectInput = screen.getByTestId("subject-input");
      const messageInput = screen.getByTestId("message-input");
      const submitButton = screen.getByTestId("submit-button");

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
      fireEvent.change(messageInput, { target: { value: "Test Message" } });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByTestId("status-message")).toHaveTextContent(
          /sending message/i,
        );
      });

      await waitFor(() => {
        expect(screen.getByTestId("status-message")).toHaveTextContent(
          /message sent successfully/i,
        );
      });
    });

    it("should require all fields", () => {
      const nameInput = screen.getByTestId("name-input");
      const emailInput = screen.getByTestId("email-input");
      const subjectInput = screen.getByTestId("subject-input");
      const messageInput = screen.getByTestId("message-input");

      expect(nameInput).toBeRequired();
      expect(emailInput).toBeRequired();
      expect(subjectInput).toBeRequired();
      expect(messageInput).toBeRequired();
    });
  });

  it("should have proper responsive layout", () => {
    const contactSection = screen.getByTestId("contact");
    expect(contactSection.querySelector(".grid")).toHaveClass(
      "grid-cols-1",
      "lg:grid-cols-2",
    );
  });
});
