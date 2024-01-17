import { test as setup } from '@playwright/test';
import { ApiCalls } from '../logic/api/api-request'
import users from "../configFiles/user-details.json"
import auth from "../configFiles/config.json"
import urls from "../configFiles/urls.json"
import { setUserCredential } from '../logic/api/request-body/login-api-request';

setup('authenticate', async ({ browser, request }) => {
    const apiCalls = new ApiCalls()
    const data = setUserCredential(users.loginPage.userName, users.loginPage.password)
    await apiCalls.makeLogin(data, request);
    const state = await request.storageState();
    const context = await browser.newContext({ storageState: state });
    const page = await context.newPage();
    await page.goto(urls.uiUrl.websiteUrl);
    await page.context().storageState({ path: auth.authFile });
});