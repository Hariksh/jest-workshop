const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("Should apply automatic 5% discount when subtotal >= 1000", () => {
  const result = calculateFinalAmount(1000);
  expect(result).toBe(950);
});

test("Should apply SAVE10 coupon (10% or max $100 discount)", () => {
  const result = calculateFinalAmount(500, "SAVE10");
  expect(result).toBe(450);
});

test("Should apply FLAT50 coupon for $50 flat discount", () => {
  const result = calculateFinalAmount(200, "FLAT50");
  expect(result).toBe(150);
});
