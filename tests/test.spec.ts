import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { Header } from "../logic/Browser/header";
import configJson from "../config.json"
import { ProductPage } from "../logic/Browser/product-page";

test.describe('My test suite', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });


    test('check logged in ', async () => {
        page=await browser.getPage(configJson.url)
        const header = new Header(page)
      const receivedValue = await header.getLoggedinUserName();  
      expect(receivedValue).toContain(configJson.user);

  })

  test('Check if women items is sort by', async () => {
    page=await browser.getPage(configJson.url)
    const header = new Header(page)
    await header.goToWomenPage()
    const selectOptionBy = new ProductPage(page)
    await selectOptionBy.selectCategoryBy(configJson.showOptionyBy.sale) 
    expect(await page.url()).toBe(configJson.expectedSortUrl)
    await page.waitForTimeout(5000);  
    

})

  });