import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { calculateDiffDate } from "./calculate";

test("on click show d-day", () => {
  render(<App />);
  const input = screen.getByTestId("date-input");
  const button = screen.getByTestId("calculate-btn");

  fireEvent.change(input, { target: { value: "2021-01-01" } });
  button.click();

  const dDay = screen.getByTestId("d-day");

  expect(dDay).toBeInTheDocument();
});

test("calculate", () => {
  const diff = calculateDiffDate(
    new Date("2021-01-01"),
    new Date("2021-01-05")
  );

  expect(diff).toBe(4);
});

test("calculate #2", () => {
  const diff = calculateDiffDate(
    new Date("2020-12-31"),
    new Date("2021-01-05")
  );

  expect(diff).toBe(5);
});
