import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { WishListPage } from "../logic/browser/wishlist-page";
import { BrandPage } from "../logic/browser/brand-Page";
import urls from "../configFiles/urls.json"

test.describe('test for navigation via ui', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(urls.uiUrl.websiteUrl)
    });

    test.afterEach(async () => {
        await browser.closeBrowser()
    });

    test("check the brand icon click navigate to brand products", async () => {
        const brandName = new BrandPage(page)
        await brandName.brandClick()
        expect(await brandName.productListContnet()).toContain('ADIDAS')

    })
})