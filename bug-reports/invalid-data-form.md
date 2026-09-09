**Title:** Data form is accepting invalid data in the following fields: name, last name and ZIP code

**Environment:**
- Browser: Google Chrome 151.0.7922.138
- OS: macOS Tahoe 26.3.1
- URL: https://www.saucedemo.com/checkout-step-one.html

**Preconditions:** Add one item to the cart and proceed to the checkout information page.

**Steps to reproduce:**
1. Add a product to the cart.
2. Click on the cart icon at the top right of the site.
3. Click on the green "Checkout" button.
4. On the form page, enter the following:
   - First Name: 1
   - Last Name: 1
   - ZIP Code: 1
5. Click on the green "Continue" button.

**Actual result:** The system accepts any type of data and redirects to the order summary page to complete the purchase.

**Expected result:** The system should validate that First Name and Last Name contain a minimum number of alphabetic characters, and that the ZIP Code is in a valid numeric format.

**Severity:** Major
**Priority:** Medium

**Evidence:** <img width="1381" height="599" alt="Screenshot 2026-09-09 at 12 25 19 p m" src="https://github.com/user-attachments/assets/84b68546-c96e-48cb-80b6-400814607a52" />
<img width="1393" height="637" alt="Screenshot 2026-09-09 at 12 25 26 p m" src="https://github.com/user-attachments/assets/5b178d8a-bb63-4dfb-9fba-a0f46a072d06" />

