const { test, expect } = require('@playwright/test');

test.describe('User Table Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML page, replace with your actual URL or file path
    await page.goto('file:///C:/Playwright/tests/table.html');
  });

  test('Table has 3 rows', async ({ page }) => {
    const rows = await page.locator('#userTable tbody tr');
    await expect(rows).toHaveCount(3);
  });

  test('First row data is correct', async ({ page }) => {
    const firstRow = page.locator('#userTable tbody tr').first();
    await expect(firstRow.locator('td').nth(0)).toHaveText('1');
    await expect(firstRow.locator('td').nth(1)).toHaveText('Anthony');
    await expect(firstRow.locator('td').nth(2)).toHaveText('30');
    await expect(firstRow.locator('td').nth(3)).toHaveText('anthony@example.com');
  });

  test('All names are displayed', async ({ page }) => {
    const names = await page.locator('#userTable tbody tr td:nth-child(2)').allTextContents();
    expect(names).toEqual(['Anthony', 'Christian', 'Sneha']);
  });
});
