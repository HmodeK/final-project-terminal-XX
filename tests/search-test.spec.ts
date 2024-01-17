import { test, Page, expect } from '@playwright/test';
import { BrowserWrapper } from "../infra/browser/browser-wrapper"; 
import { Searching } from '../logic/Browser/product-search';
import urls from "../configFiles/urls.json"

test.describe('test for searching about products', ()=>{
    let browser: BrowserWrapper;
    let page : Page;

    test.beforeEach(async() =>{
        browser = new BrowserWrapper();
        page = await browser.getPage(urls.uiUrl.websiteUrl)
    });

    test.afterEach(async () => {
        await browser.closeBrowser()
    });

    test('Perform search', async () => {
        const searching = new Searching(page);
        await searching.performSearch('תינוק');
        await page.mouse.move(-2000, -2000);
        expect(await searching.searchContent()).toContain('תינוק')
    });
});
