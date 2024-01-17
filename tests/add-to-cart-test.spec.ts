import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { ApiCalls } from "../logic/api/api-request";
import { CartPage } from "../logic/browser/cart-page";
import details from "../configFiles/config.json"
import urls from "../configFiles/urls.json"
import { buildCartRequest } from "../logic/api/request-body/add-to-cart-api-requests";

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
        const api = new ApiCalls()
        const data = buildCartRequest(details.itemIdThatsAdded,1)
        await api.addItemToCart(data)
        page = await browser.getPage(urls.uiUrl.cartPageUrl)
        const cartPage = new CartPage(page)
        expect(await cartPage.checkTheItemIsAdded()).toBe(1)
    })
});