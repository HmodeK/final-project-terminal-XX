import { test, Page, expect } from '@playwright/test';
import { BrowserWrapper } from "../infra/browser-wrapper";
import { launchBrowserAndMakeLogin } from '../fixture/fixture';
import { Searching } from '../logic/Browser/searching';


test.describe('test for searching', ()=>{
    let browser: BrowserWrapper;
    let page : Page;

    test.beforeEach(async() =>{
       ({ browser, page } = await launchBrowserAndMakeLogin()); 
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test('Perform search', async ()=>{
        const searching = new Searching(page);
        await searching.performSearch('תינוק');
        await page.mouse.move(-2000,-2000);
        await page.waitForTimeout(5000);  
      });

});