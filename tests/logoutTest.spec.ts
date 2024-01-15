import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Logout } from "../logic/logout";
import { launchBrowserAndMakeLogin } from '../fixture/fixture';


let page: Page;

test.describe('test for logout', () => {
    let browser: BrowserWrapper;
    let page: Page;
    test.beforeEach(async () => {
       ({ browser, page } = await launchBrowserAndMakeLogin());
    
    });

  

    test("check the user name after logout", async () => {
        const logout = new Logout(page);
        await logout.logoutLogoClick()
       expect(await logout.progileLogoContent()).toContain('התחברות')
    })
})