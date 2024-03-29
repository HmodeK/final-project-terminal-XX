import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Logout } from "../logic/browser/logout";
import urls from "../configFiles/urls.json"

test.describe('test for logout', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(urls.uiUrl.websiteUrl)
    });
    test.afterEach(async () => {
        await browser.closeBrowser()
    });

    test("check the user name after logout", async () => {
        const logout = new Logout(page);
        await logout.logoutLogoClick()
        expect(await logout.profileLogoContent()).toContain('התחברות')
    })
})