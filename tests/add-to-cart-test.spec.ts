import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { addItem_to_cart } from "../logic/api/api-request";
import { CartPage } from "../logic/Browser/cart-page";

test.describe('Added item and validate if item is added vi api & ui', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test.afterEach(async () => {
        const cartPage = new CartPage(page)
        await cartPage.removeItemFromCart()
        await browser.closeBrowser()
    });

    test('add to cart via Api & validating if item is added via Ui', async () => {
        addItem_to_cart(configJson.itemIdThatsAdded, 3)
        page = await browser.getPage(configJson.uiUrl.cartPageUrl)
        const cartPage = new CartPage(page)
        expect(await cartPage.checkTheItemIsAdded()).toBe(1)
    })
});