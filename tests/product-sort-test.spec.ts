import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Header } from "../logic/browser/header";
import { ProductSort } from "../logic/browser/product-sort";
import category from "../configFiles/category.json"
import urls from "../configFiles/urls.json"

test.describe('test sort product', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(urls.uiUrl.websiteUrl)
        const header = new Header(page)
        await header.goToWomenPage()
    });

    test.afterEach(async () => {
        await browser.closeBrowser()
    });

    test('Check if items is sorted by', async () => {
        const selectOptionBy = new ProductSort(page)
        await selectOptionBy.selectCategoryBy(category.category.showOptionyBy.sale)
        expect(await selectOptionBy.getProductTitle()).toContain('מבצע')
    })
})