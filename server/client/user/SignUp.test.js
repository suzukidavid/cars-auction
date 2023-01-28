import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import SignUp from "./Signup";

describe("App component", () => {
  it("should have the input field for email", () => {
    render(<SignUp />);
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  });
  it("should have the input field for name", () => {
    render(<SignUp />);
    const nameInput = screen.getByLabelText("Name");
    expect(nameInput).toBeInTheDocument();
  });
  it("should have the input field for password", () => {
    render(<SignUp />);
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
  });
  afterAll(cleanup);
});
