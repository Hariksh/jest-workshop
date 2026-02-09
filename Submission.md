# Jest Workshop Submission

## Student Details

- Name: Hariksh Mahendra Suryawanshi
- Roll Number: 2024-B-04012007A
- GitHub Username: Hariksh

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: example: sanity check

**What it protects against:** Ensures Jest test framework is properly configured and running

---

### 2. Test Name: Check for invalid sub total

**What it protects against:** Prevents negative or invalid subtotals from being accepted - ensures error handling for invalid input

---

### 3. Test Name: Should apply automatic 5% discount when subtotal >= 1000

**What it protects against:** Ensures bulk discount (5% off) is correctly applied when subtotal is $1000 or more

---

### 4. Test Name: Should apply SAVE10 coupon (10% or max $100 discount)

**What it protects against:** Validates SAVE10 coupon code calculates correct discount (10% with $100 cap)

---

### 5. Test Name: Should apply FLAT50 coupon for $50 flat discount

**What it protects against:** Ensures FLAT50 coupon correctly deducts exactly $50 from the final amount

---

## CI Pipeline (if implemented)

- Did CI pass successfully? Yes
- GitHub Actions Run URL: Available under Actions tab after pushing to GitHub

---

## Reflection (1–2 lines)

What is **one thing** you understood better about testing or CI after this workshop?

Testing helps catch bugs early by validating both normal cases and edge cases. CI/CD automation ensures our code stays reliable across multiple Node.js versions automatically.
