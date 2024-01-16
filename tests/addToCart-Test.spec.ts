import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Header } from "../logic/Browser/header";
import configJson from "../config.json"
import { addItem_to_cart } from "../logic/api/api-request";
import { CartPage } from "../logic/Browser/cart-page";

test.describe('My test suite', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(configJson.url)
        const header = new Header(page)
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });



test('add to cart & verify if item is added', async () => {
    addItem_to_cart(configJson.itemIdThatsAdded,2)
    page = await browser.getPage(configJson.uiCartPageUrl)
    const cartPage = new CartPage(page)
    expect(await cartPage.checkTheItemIsAdded()).toContain("טי שירט ריצה ")
    await page.waitForTimeout(10000)
})
});