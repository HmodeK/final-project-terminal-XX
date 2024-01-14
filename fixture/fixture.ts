import { Page } from "@playwright/test";
import configJson from "../config.json"
import { BrowserWrapper } from "../infra/browser-wrapper";
import { Header } from "../logic/header";
import { LoginPage } from "../logic/login-page";

let browser: BrowserWrapper;
let page: Page;

const launchBrowserAndMakeLogin = async (): Promise<{ browser: BrowserWrapper, page: Page }> => {
    browser = new BrowserWrapper()
    page = await browser.getPage(configJson.url)
    // browser.maximizeWindow()
    const header = new Header(page)
    await header.navigatToLoginPage()
    const login = new LoginPage(page)
    await login.makeLogin(configJson.loginPage.userName, configJson.loginPage.password)
    return { browser, page };
};

export { launchBrowserAndMakeLogin }