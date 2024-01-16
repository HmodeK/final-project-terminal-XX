import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { Header } from "../logic/Browser/header";
import { ProductPage } from "../logic/Browser/product-page";
import { FilterProducts } from "../logic/Browser/productsPage";

test.describe('test sort and filter about products', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
        const header = new Header(page)
        await header.goToWomenPage()

    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test('Check if items is sorted by', async () => {
        const selectOptionBy = new ProductPage(page)
        await selectOptionBy.selectCategoryBy(configJson.category.showOptionyBy.sale)
        expect(page.url()).toBe(configJson.expectedUrls.sortUrl)
    })

    test("check  if the products filterd", async () => {
        const selectOptionBy = new FilterProducts(page)
        await selectOptionBy.filterFunction()
        expect(page.url()).toBe(configJson.expectedUrls.filterUrl)
    })
})