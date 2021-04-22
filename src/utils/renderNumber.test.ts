import { renderNumber } from "./renderNumber";

describe("renderNumber", () => {
  it("should render '999' correctly", () => {
    expect(renderNumber(999)).toBe("999");
  });
  it("should render 'unreported'", () => {
    expect(renderNumber(undefined)).toBe("unreported");
  });
  it("should render '0' as 'unreported'", () => {
    expect(renderNumber(0)).toBe("unreported");
  });
  it("should render '1234567' correctly", () => {
    expect(renderNumber(1234567)).toBe("1,234,567");
  });
});
