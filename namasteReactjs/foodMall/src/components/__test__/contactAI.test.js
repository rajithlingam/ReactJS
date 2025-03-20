import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Component", () => {

  test("renders the heading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { name: "Contact Us" });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  
  test("renders the form inputs and submit button", () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // Test 3: Verify user input updates the state
  test("updates state on user input", () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hello, this is a test message." },
    });

    // Verify the input values
    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("john.doe@example.com");
    expect(messageInput.value).toBe("Hello, this is a test message.");
  });

  // Test 4: Verify form submission
  test("submits the form and resets it", () => {
    // Mock the alert function
    window.alert = jest.fn();

    render(<Contact />);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");
    const submitButton = screen.getByText("Submit");

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hello, this is a test message." },
    });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Verify the alert is shown
    expect(window.alert).toHaveBeenCalledWith(
      "Thank you for contacting us! We'll get back to you soon."
    );

    // Verify the form is reset
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });

  // Test 5: Verify form submission logs the correct data
  test("logs the correct form data on submission", () => {
    // Mock console.log
    console.log = jest.fn();

    render(<Contact />);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hello, this is a test message." },
    });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Verify the form data is logged correctly
    expect(console.log).toHaveBeenCalledWith("Form Data Submitted:", {
      name: "John Doe",
      email: "john.doe@example.com",
      message: "Hello, this is a test message.",
    });
  });
});
