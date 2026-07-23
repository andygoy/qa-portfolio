import { test, expect } from '@playwright/test';

test('checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('[data-test="shopping-cart-link"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.click('#checkout');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.fill('#first-name', 'Jane');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '1234');
    await page.click('#continue');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await page.click('#finish');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');

});
