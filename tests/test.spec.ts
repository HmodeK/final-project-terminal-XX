import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { launchBrowserAndMakeLogin } from '../fixture/fixture';
import { Header } from "../logic/header";
import configJson from "../config.json"
import { LongPantsPage } from "../logic/long-pants-page";

test.describe('My test suite', () => {
    let browser: BrowserWrapper;
    let page: Page;



test.beforeEach(async () => {
    ({ browser, page } = await launchBrowserAndMakeLogin());
});

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test('check logged in', async () => {
      const header = new Header(page)
      const receivedValue = await header.getLoggedInUserName();  
      expect(receivedValue).toContain("הי,");
      expect(receivedValue).toContain(configJson.user);
  })


  test('Check if women items is sorte by', async () => {
    const header = new Header(page)
    await header.goToWomenPage()
    const selectOptionBy = new LongPantsPage(page)
    await selectOptionBy.selectCategoryBy(configJson.showOptionyBy.sale) 
    await page.waitForTimeout(5000)

})

  });