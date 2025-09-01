import { describe, expect, it } from "bun:test";
import { isScrolledFromY, pickMostVisibleId } from "../src/utils/nav";

describe("nav utils", () => {
	it("isScrolledFromY respects threshold", () => {
		expect(isScrolledFromY(0)).toBe(false);
		expect(isScrolledFromY(8)).toBe(false);
		expect(isScrolledFromY(9)).toBe(true);
		expect(isScrolledFromY(100)).toBe(true);
		expect(isScrolledFromY(7, 10)).toBe(false);
		expect(isScrolledFromY(11, 10)).toBe(true);
	});

	it("pickMostVisibleId returns null when nothing visible", () => {
		expect(pickMostVisibleId([])).toBeNull();
		expect(
			pickMostVisibleId([
				{ id: "home", ratio: 0 },
				{ id: "about", ratio: 0 },
			]),
		).toBeNull();
	});

	it("pickMostVisibleId returns the id with highest ratio", () => {
		expect(
			pickMostVisibleId([
				{ id: "home", ratio: 0.2 },
				{ id: "features", ratio: 0.6 },
				{ id: "about", ratio: 0.4 },
			]),
		).toBe("features");

		expect(
			pickMostVisibleId([
				{ id: "home", ratio: 0.1 },
				{ id: "contact", ratio: 0.9 },
			]),
		).toBe("contact");
	});
});
