import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { WishListPage } from "../logic/Browser/wishlist-page";
import { BrandPage } from "../logic/Browser/brand-Page";
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

    test("check the heartIcon click navigate to wishList ", async () => {
        const wishList = new WishListPage(page);
        await wishList.heartIconClick()
        await page.waitForTimeout(5000);
        expect(page.url()).toBe(urls.expectedUrls.wishListUrl)

    })

    test("check the brand icon click navigate to brand page", async () => {
        const brandName = new BrandPage(page)
        await brandName.brandClick()
        await page.waitForTimeout(2000);
        expect(page.url()).toBe(urls.expectedUrls.brandUrl)

    })
})