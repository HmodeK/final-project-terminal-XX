import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { launchBrowserAndMakeLogin } from '../fixture/fixture';
import configJson from "../config.json"

import { ProductsPage } from "../logic/productsPage";
let page: Page;

  

test.describe('test for filter products', () => {
    let browser: BrowserWrapper;
    let page: Page;
   

    test("check  if the products filterd", async () => {
        const products = new ProductsPage(page);
        await products.filterFunction()
       expect(await page.url()).toBe(configJson.expectedUrlFilter)
    })
})