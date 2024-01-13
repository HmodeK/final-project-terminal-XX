import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { LoginPage } from "../logic/login-page";
import { Header } from "../logic/header";


let browser: BrowserWrapper;
let page: Page;



test.describe('Shopping website test', () => {
    test.beforeAll(async () => {
        browser = new BrowserWrapper;
    });

    test.beforeEach(async () => {
        page = await browser.getPage(configJson.url)
        //browser.maximizeWindow()
        const header = new Header(page)
        await header.navigatToLoginPage()
        const login = new LoginPage(page)
        await login.makeLogin(configJson.loginPage.userName, configJson.loginPage.password)
    
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test.only('check logged in', async () => {
      
  })


  })