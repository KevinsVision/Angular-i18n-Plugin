import { test, expect } from '@playwright/test';

test.describe('Portuguese - ', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4203/');
    })

    test('homepage has project title', async ({ page }) => {
        
        await expect(page).toHaveTitle('Recibo');
    });

    test('has project header', async ({ page }) => {
        
        const header = page.locator('.header');
        expect(await header?.innerText()).toBe('Confirmação de Ingresso')
    });

});
