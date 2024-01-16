import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { Header } from "../logic/Browser/header";
import { ProductPage } from "../logic/Browser/product-page";
import { FilterProducts } from "../logic/Browser/productsPage";

test.describe('test for  products', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(configJson.url)
        const header = new Header(page)
        await header.goToWomenPage()

    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });


    test('Check if items is sorted by', async () => {
        page = await browser.getPage(configJson.url)
        const header = new Header(page)
        await header.goToWomenPage()
        const selectOptionBy = new ProductPage(page)
        await selectOptionBy.selectCategoryBy(configJson.showOptionyBy.sale)
        expect(await page.url()).toBe(configJson.expectedSortUrl)
    })

    test("check  if the products filterd", async () => {
        page = await browser.getPage(configJson.url)
        const header = new Header(page)
        await header.goToWomenPage()
        const selectOptionBy = new FilterProducts(page)
        await selectOptionBy.filterFlow()
        expect(await page.url()).toBe(configJson.expectedUrlFilter)
    })
})