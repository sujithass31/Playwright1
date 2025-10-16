const { test, expect } = require('@playwright/test');
const { describe } = require('node:test');

//test.describe('HTML Page Tests', () => {
// describe("HTML page test", function (params) {
    

  test('Home Page - Navigation works', async ({ page }) => {
    await page.goto('file:///C:/Playwright/tests/index.html');
    await page.click('#go-to-form');
    await expect(page).toHaveURL(/.*form.html/);
    /*await page.click('#userTable');
    await expect(page).toHaveURL(/.*table.html/);
    await page.click('#loginForm');
    await expect(page).toHaveURL(/.*login.html/);*/
  });

  test('Form Page - Form submits correctly', async ({ page }) => {
    await page.goto('file:///C:/Playwright/tests/form.html');
    await page.fill('#name', 'Sujitha');
    await page.fill('#email', 'sujitha.sarojammal@ust.com');
    await page.click('button[type="submit"]');
    await expect(page.locator('#form-message')).toBeVisible();
  });

  /*test('Table Page - Table contains user data', async ({ page }) => {
    await page.goto('file:///C:/Playwright/tests/table.html');
    const rowCount = await page.locator('#user-table tr').count();
    expect(rowCount).toBe(3); // Header + 2 data rows
    await expect(page.locator('td')).toContainText(['Christian', 'Sneha']);
  });*/

  /*test('Modal Page - Modal opens and closes', async ({ page }) => {
    await page.goto('http://localhost:3000/modal.html');
    await page.click('#openModal');
    await expect(page.locator('#myModal')).toBeVisible();
    await page.click('#closeModal');
    await expect(page.locator('#myModal')).toBeHidden();
  });*/

//})