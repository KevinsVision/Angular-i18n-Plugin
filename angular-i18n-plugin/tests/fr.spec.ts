import { test, expect } from '@playwright/test';

test.describe('French - ', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4202/');
    })

    test('homepage has project title', async ({ page }) => {

        await expect(page).toHaveTitle('Reçu');
    });

    test('has project header', async ({ page }) => {
        
        const header = page.locator('.header');
        expect(await header?.innerText()).toBe('Confirmation de billet')
    });

});
