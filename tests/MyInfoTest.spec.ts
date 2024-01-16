import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { MyProfile } from "../logic/Browser/MyProfile";
import configJson from "../config.json"

test.describe('test for userInfo', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {

        browser = new BrowserWrapper();

    });

    test("check  if the user name is correct", async () => {
        page = await browser.getPage(configJson.url)
        test.slow();
        const myInfo = new MyProfile(page);
        await myInfo.myProfile()
        expect(await myInfo.myInfoContent()).toContain(configJson.user)

    })
})