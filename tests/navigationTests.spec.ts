import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { Header } from "../logic/Browser/header";
import { WishListPage } from "../logic/Browser/wishlistPage";

test.describe('test for navigation', () => {
    let browser: BrowserWrapper;
    let page: Page;
    
    test.beforeEach(async () => {

        browser = new BrowserWrapper();

    });

    test("check the heartIcon click navigate to wishList ", async () => {
        page=await browser.getPage(configJson.url)
        test.slow();
        const wishList = new WishListPage(page);
        await wishList.heartIconClick()
        await page.waitForTimeout(5000);
        expect(await page.url()).toBe(configJson.expectedWishListUrl)
       
    })
})