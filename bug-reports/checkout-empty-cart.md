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

**Evidence:** <img width="1408" height="208" alt="Screenshot 2026-09-09 at 11 40 11 a m" src="https://github.com/user-attachments/assets/45f81371-c4be-4616-bfa1-f322d010849b" />
<img width="1015" height="463" alt="Screenshot 2026-09-09 at 11 40 26 a m" src="https://github.com/user-attachments/assets/50755635-a110-4e05-912e-7ade5a381167" />

