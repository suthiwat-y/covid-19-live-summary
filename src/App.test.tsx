import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
  const title = screen.getByText("COVID-19 Live Summary");
  expect(title).toBeInTheDocument();
});
