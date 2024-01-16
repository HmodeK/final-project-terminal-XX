import { expect, test as setup } from '@playwright/test';
import configJson from "../config.json"
import { makeLogin } from '../logic/api/api-request';
import { Header } from '../logic/Browser/header';

setup('authenticate', async ({ browser, request }) => {
    await makeLogin(request);
    const state = await request.storageState();
    const context = await browser.newContext({ storageState: state });
    const page = await context.newPage();
    await page.goto(configJson.uiUrl.websiteUrl);
    const header = new Header(page)
    expect(await header.getLoggedinUserName()).toBe(configJson.user)
    await page.context().storageState({ path: configJson.authFile });
});