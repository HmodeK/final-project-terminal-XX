import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Header } from "../logic/browser/header";
import { FilterProducts } from "../logic/browser/product-filter";
import urls from "../configFiles/urls.json"

test.describe('test filter product', () => {
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

    test("check  if the products filterd", async () => {
        const selectOptionBy = new FilterProducts(page)
        await selectOptionBy.filterFlow()
        expect(await selectOptionBy.getProductTitle()).toContain('מכנסיים ארוכים')
    })
})