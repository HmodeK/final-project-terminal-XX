import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Header } from "../logic/Browser/header";
import configJson from "../config.json"

test.describe('My test suite', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test('check logged in ', async () => {
        const header = new Header(page)
        const receivedValue = await header.getLoggedinUserName();
        expect(receivedValue).toBe(configJson.user);
    })
});