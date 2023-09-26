import Home from "../pages/index";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";

describe("Teacher/Student App", () => {
  it("renders the Teacher/Student links on the homepage", () => {
    render(<Home />);

    expect(screen.getByTestId("teacher-link")).toBeInTheDocument();
    expect(screen.getByTestId("student-link")).toBeInTheDocument();
    expect(screen.getByTestId("view-registrations")).toBeInTheDocument();
  });
});
