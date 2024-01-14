import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Logout } from "../logic/logout";
import configJson from "../config.json"
import { LoginPage } from "../logic/login-page";
import { Header } from "../logic/header";

let page: Page;

test.describe('test for logout', () => {
    let browserWrapper: BrowserWrapper;
    test.beforeEach(async () => {
        browserWrapper = new BrowserWrapper;
        page = await browserWrapper.getPage(configJson.url)
       // browserWrapper.maximizeWindow()
        const header = new Header(page)
        await header.navigatToLoginPage()
        const login = new LoginPage(page)
        await login.makeLogin(configJson.loginPage.userName, configJson.loginPage.password)
    
    });

  

    test("check the user name after logout", async () => {
        browserWrapper = new BrowserWrapper();
        const logout = new Logout(page);
        await logout.logoutLogoClick()

       expect(await logout.progileLogoContent()).toContain('התחברות')
    })
})