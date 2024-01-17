import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Header } from "../logic/Browser/header";
import { ProductPage } from "../logic/Browser/product-sort";
import { FilterProducts } from "../logic/Browser/product-filter";
import category from "../configFiles/category.json"
import urls from "../configFiles/urls.json"

test.describe('test sort and filter about products', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(urls.uiUrl.websiteUrl)
        const header = new Header(page)
        await header.goToWomenPage()
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test('Check if items is sorted by', async () => {
        const selectOptionBy = new ProductPage(page)
        await selectOptionBy.selectCategoryBy(category.category.showOptionyBy.sale)
        expect(page.url()).toBe(urls.expectedUrls.sortUrl)
    })

    test("check  if the products filterd", async () => {
        const selectOptionBy = new FilterProducts(page)
        await selectOptionBy.filterFlow()
        expect(page.url()).toBe(urls.expectedUrls.filterUrl)
    })
})