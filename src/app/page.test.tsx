import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the hero headline", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /tools that make design/i }),
    ).toBeInTheDocument();
  });

  it("showcases the Web2Wireframe plugin linking to its product site", () => {
    render(<Home />);
    expect(screen.getByText("Web2Wireframe")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /web2wireframe/i });
    expect(link).toHaveAttribute("href", "https://web2wireframe.design");
  });
});
