import { test, Page, expect } from '@playwright/test';
import { BrowserWrapper } from "../infra/browser-wrapper";
import { Searching } from '../logic/Browser/searching';
import configJson from "../config.json"

test.describe('test for searching', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(configJson.url)
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test('Perform search', async () => {
        const searching = new Searching(page);
        await searching.performSearch('תינוק');
        await page.mouse.move(-2000, -2000);
        expect(await searching.searchContent()).toContain('תינוק')
    });
});