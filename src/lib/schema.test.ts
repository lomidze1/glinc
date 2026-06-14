import { describe, it, expect } from "vitest";
import {
  organizationSchema,
  softwareApplicationSchema,
  breadcrumbSchema,
} from "./schema";
import { plugins } from "@/data/plugins";

describe("schema", () => {
  it("organization schema has the expected type and url", () => {
    expect(organizationSchema["@type"]).toBe("Organization");
    expect(organizationSchema.url).toBe("https://glinc.io");
  });

  it("software application schema reflects the plugin", () => {
    const s = softwareApplicationSchema(plugins[0]);
    expect(s["@type"]).toBe("SoftwareApplication");
    expect(s.name).toBe("Web2Wireframe");
    expect(s.url).toBe("https://glinc.io/plugins/web2wireframe");
  });

  it("breadcrumb schema numbers items from 1", () => {
    const s = breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Plugins", path: "/plugins" },
    ]);
    expect(s.itemListElement).toHaveLength(2);
    expect(s.itemListElement[0].position).toBe(1);
    expect(s.itemListElement[1].item).toBe("https://glinc.io/plugins");
  });
});
