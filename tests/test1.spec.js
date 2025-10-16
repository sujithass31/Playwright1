const { test, expect } = require('@playwright/test');

test('Personal website elements', async ({ page }) => {
    // Open the personal website (adjust the path to your local file)
    await page.goto('file:///C:/Playwright/tests/index_first.html');

    // Check if the header contains the right name
    const headerText = await page.textContent('header h1');
    expect(headerText).toBe('Sujitha');

    // Check if the "About Me" section exists
    const aboutText = await page.textContent('section h2');
    expect(aboutText).toBe('About Me');

    // Check if the contact form exists
    const formTitle = await page.textContent('.contact-form h2');
    expect(formTitle).toBe('Contact Me');

    // Fill out the contact form
    await page.fill('#name', 'Sujitha Sarojammal');
    await page.fill('#email', 'Sujitha.Sarojammal@ust.com');
    await page.fill('#message', 'Hello, I have a question about your work.');

    // Submit the form and wait for the alert
    page.on('dialog', dialog => {
        expect(dialog.message()).toBe('Your message has been sent!');
        dialog.dismiss();
    });

    await page.click('button[type="submit"]');
});

