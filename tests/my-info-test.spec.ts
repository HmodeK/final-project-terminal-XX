import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { MyProfile } from "../logic/Browser/MyProfile";
import users from "../configFiles/user-details.json"
import urls from "../configFiles/urls.json"

test.describe('test for userInfo', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test.afterEach(async () => {
        await browser.closeBrowser()
    });

    test("check  if the user name is correct", async () => {
        page = await browser.getPage(urls.uiUrl.websiteUrl)
        const myInfo = new MyProfile(page);
        await myInfo.myProfile()
        expect(await myInfo.myInfoContent()).toContain(users.user)

    })
})