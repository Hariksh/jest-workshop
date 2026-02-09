const { calculateFinalAmount } = require("../src/pricing");

test("Should not apply discount when no coupon for subtotal < 1000", () => {
  const result = calculateFinalAmount(500);
  expect(result).toBe(500);
});

test("Should apply SAVE10 coupon (10% or max $100 discount)", () => {
  const result = calculateFinalAmount(500, "SAVE10");
  expect(result).toBe(450);
});

test("Should apply FLAT50 coupon boundary case", () => {
  const result = calculateFinalAmount(50, "FLAT50");
  expect(result).toBe(0);
});

test("Should throw error for invalid subtotal", () => {
  expect(() => calculateFinalAmount(-100, "SAVE10")).toThrow(
    "Invalid subtotal",
  );
});

test("Should handle case-insensitive coupon codes", () => {
  const result = calculateFinalAmount(500, "save10");
  expect(result).toBe(450);
});
