import { test, Page, expect } from '@playwright/test';
import { BrowserWrapper } from "../infra/browser-wrapper";
import { Searching } from "../logic/searching";
import { launchBrowserAndMakeLogin } from '../fixture/fixture';


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
        expect(5==5)
    });

});