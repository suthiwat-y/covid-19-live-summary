import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render", () => {
    render(<App />);
    const title = screen.getByText(/covid-19 live Summary/i);
    const firstDivider = screen.getAllByText(/global summary/i);
    const secondDivider = screen.getAllByText(/by country/i);

    expect(title).toBeInTheDocument();
    expect(firstDivider).toBeTruthy();
    expect(secondDivider).toBeTruthy();
  });
});
