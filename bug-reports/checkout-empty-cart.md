**Title:** Checkout can be completed with an empty cart

**Environment:**
- Browser: Google Chrome 151.0.7922.138
- OS: macOS Tahoe 26.3.1
- URL: https://www.saucedemo.com/

**Preconditions:** Do not add any objects to the cart.

**Steps to reproduce:**
1. With an empty cart, click on the cart icon located at the top right of the site.
2. Click on the green "Checkout" button.
3. Fill out the required data (First Name, Last Name, ZIP Code).
4. Click on "Continue".
5. Click on "Finish".

**Actual result:** The system allows placing an order with an empty cart.

**Expected result:** When clicking "Checkout" with an empty cart, the system should display an error message indicating there are no products in the cart and prevent moving forward.

**Severity:** Critical
**Priority:** High

**Evidence:** [Add screenshot here]
