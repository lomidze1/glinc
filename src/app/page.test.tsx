import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the headline", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /tools that make design/i,
    );
  });

  it("renders the studio kicker", () => {
    render(<Home />);
    expect(screen.getByText("// studio for designers")).toBeInTheDocument();
  });
});
