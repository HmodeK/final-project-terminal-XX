import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { launchBrowserAndMakeLogin } from '../fixture/fixture';

test.describe('My test suite', () => {
    let browser: BrowserWrapper;
    let page: Page;



test.beforeEach(async () => {
    ({ browser, page } = await launchBrowserAndMakeLogin());
});

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test.only('check logged in', async () => {
      
  })


  })