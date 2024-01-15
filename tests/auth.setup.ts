import { expect, test as setup } from '@playwright/test';
import configJson from "../config.json"
import { makeLogin } from '../logic/api/api-request';

  
setup('authenticate', async ({ browser, request }) => {
    await makeLogin(request);
    const state = await request.storageState();
    const context = await browser.newContext({ storageState: state });
    const page = await context.newPage();
    await page.goto(configJson.url);
   
    await page.context().storageState({ path: configJson.authFile });
});