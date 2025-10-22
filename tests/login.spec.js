const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');  // Or use firefox/webkit



 
  

  // Before each test, open the login page
  test.beforeEach(async ({ page }) => {
    
    await page.goto('file:///C:/Playwright/tests/login.html');
      
  });

  test('should display login page elements', async ({ page }) => {
    await expect(page.locator('h2')).toHaveText('Login1');
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#loginButton')).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');
    await page.click('#loginButton');

    const message = page.locator('#message');
    await expect(message).toHaveText('Invalid username or password.');
    await expect(message).toHaveCSS('color', 'rgb(255, 0, 0)'); // red color
  });

  test('should login successfully with correct credentials', async ({ page }) => {
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');

    const message = page.locator('#message');
    await expect(message).toHaveText('Login successfull!');
    await expect(message).toHaveCSS('color', 'rgb(0, 128, 0)'); // green color
  });

  test('should show error if username or password is empty', async ({ page }) => {
    // Empty username
    await page.fill('#username', '');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    await expect(page.locator('#message')).toHaveText('Invalid username or password.');

    // Empty password
    await page.fill('#username', 'admin');
    await page.fill('#password', '');
    await page.click('#loginButton');
    await expect(page.locator('#message')).toHaveText('Invalid username or password.');
  });

   // ✅ Stop tracing and export it to a .zip file
  

  

