import { test, Page, expect } from '@playwright/test';
import { BrowserWrapper } from "../infra/browser/browser-wrapper"; 
import { Searching } from '../logic/Browser/searching';
import configJson from "../config.json"

test.describe('test for searching about products', ()=>{
    let browser: BrowserWrapper;
    let page : Page;

    test.beforeEach(async() =>{
        browser = new BrowserWrapper();
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test('Perform search', async ()=>{
        const searching = new Searching(page);
        await searching.performSearch('תינוק');
    //expect ?????????  
      });
});