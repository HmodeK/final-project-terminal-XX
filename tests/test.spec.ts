import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Header } from "../logic/Browser/header";
import configJson from "../config.json"
import { ProductPage } from "../logic/Browser/product-page";

test.describe('My test suite', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });


    test('check logged in ', async () => {
        page = await browser.getPage(configJson.url)
        const header = new Header(page)
        const receivedValue = await header.getLoggedinUserName();
        expect(receivedValue).toContain(configJson.user);

    })

});