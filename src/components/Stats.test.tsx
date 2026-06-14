import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stats } from "./Stats";

describe("Stats", () => {
  it("renders nothing when there are no items", () => {
    const { container } = render(<Stats items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("drops stats with empty values (never shows placeholders)", () => {
    render(
      <Stats
        items={[
          { value: "", label: "Installs" },
          { value: "4.9★", label: "Rating" },
        ]}
      />,
    );
    expect(screen.queryByText("Installs")).not.toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
    expect(screen.getByText("4.9★")).toBeInTheDocument();
  });
});
