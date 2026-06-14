import { describe, it, expect } from "vitest";
import { POST } from "./route";

function post(body: unknown) {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  );
}

const valid = {
  name: "Ada",
  email: "ada@example.com",
  intent: "feedback",
  message: "Love it.",
};

describe("POST /api/contact", () => {
  it("silently accepts and drops honeypot submissions", async () => {
    const res = await post({ ...valid, company: "spam-bot" });
    expect(res.status).toBe(200);
  });

  it("rejects a missing name", async () => {
    const res = await post({ ...valid, name: "" });
    expect(res.status).toBe(400);
  });

  it("rejects an invalid email", async () => {
    const res = await post({ ...valid, email: "not-an-email" });
    expect(res.status).toBe(400);
  });

  it("fails loudly (503) when email isn't configured", async () => {
    const res = await post(valid);
    expect(res.status).toBe(503);
    const body = await res.json();
    expect(body.error).toMatch(/email us directly/i);
  });
});
