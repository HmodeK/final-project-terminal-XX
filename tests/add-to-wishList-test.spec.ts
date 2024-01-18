import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import { WishListPage } from "../logic/browser/wishlist-page";
import urls from "../configFiles/urls.json"

test.describe('test for adding product to wishList via ui', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        page = await browser.getPage(urls.uiUrl.productPageUrl)
        await browser.maximizeWindow()
        
    });

    test.afterEach(async () => {
        const wishList=new WishListPage(page)
        await wishList.removeItemFtomWishList()
        await browser.closeBrowser()
       

    });

    test("CHECK ADD ITEM TO WISHLIST ", async () => {
        const wishList = new WishListPage(page);
        await wishList.heartIconClick()
        await wishList.wishListClick()
        expect (await wishList.addItemToWishList()).toContain('טי שירט עם לוגו / TEEN')

    })

  
})