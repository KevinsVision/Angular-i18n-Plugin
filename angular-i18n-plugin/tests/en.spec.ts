import { test, expect } from '@playwright/test';

test.describe('English - ', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/');
    })

    test('homepage has project title', async ({ page }) => {
    
        await expect(page).toHaveTitle('Receipt');
    });

    test('has project header', async ({ page }) => {
        
        const header = page.locator('.header');
        expect(await header?.innerText()).toBe('Ticket Confirmation')
    });

});
