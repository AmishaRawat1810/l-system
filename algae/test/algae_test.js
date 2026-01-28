import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing";
import { algeaSystem } from "../src/algae.js";

describe("L-SYSTEM : ALGEA", () => {
  it("Algae basic : turns A into AB", () => {
    const result = algeaSystem(1, "A");
    assertEquals(result, "AB");
  });

  it("Algae basic : turns A into ABA", () => {
    const result = algeaSystem(2, "A");
    assertEquals(result, "ABA");
  });
});
