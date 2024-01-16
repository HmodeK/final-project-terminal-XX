import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { Header } from "../logic/Browser/header";
import { WishListPage } from "../logic/Browser/wishlistPage";
import { BrandPage } from "../logic/Browser/BrandPage";

test.describe('test for navigation', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {

        browser = new BrowserWrapper();
        page = await browser.getPage(configJson.url)
        test.slow();
    });

    test("check the heartIcon click navigate to wishList ", async () => {
        const wishList = new WishListPage(page);
        await wishList.heartIconClick()
        await page.waitForTimeout(5000);
        expect(await page.url()).toBe(configJson.expectedWishListUrl)

    })

    test("check the brand icon click navigate to brand page",async()=>
    {
        const brandName = new BrandPage(page)
        await brandName.brandClick()
        await page.waitForTimeout(2000);
        expect(await page.url()).toBe(configJson.expecterBrandUrl)

    })


})