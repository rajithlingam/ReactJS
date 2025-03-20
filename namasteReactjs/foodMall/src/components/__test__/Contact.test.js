
import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("testing the Elements was rendered:", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();

  const button = screen.getByRole("button");
  // console.log(button);
  expect(button).toBeInTheDocument();

  const button_text = screen.getByText("Submit");
  //console.log(button_text.length);
  expect(button_text).toBeInTheDocument();

  const inputBox = screen.getAllByRole("textbox");
  console.log(inputBox.length);
  expect(inputBox.length).toBe(3);
});
