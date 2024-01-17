import { BasePage } from "../../infra/browser/base-page";
import { Locator, Page } from "playwright";
import { waitForElementToBeVisible, waitForTimeOut } from "../../infra/utils/wait-for-elements";

export class WishListPage extends BasePage {

  private heartIcon: Locator
  private wishList: Locator
  private PrductInfo: Locator
  private removeButton: Locator

  constructor(page: Page) {
    super(page)
    this.heartIcon = page.locator('//button[@class="toggle_3KGH rtl_fPrD"]')
    this.removeButton = page.locator('//*[@id="app-root"]/div[2]/main/div[2]/div/div/div[2]/li/div[2]/div/div/div[2]/div[1]/button')
    this.wishList = page.locator('[data-test-id="qa-link-wishlist"]')
    this.PrductInfo = page.locator('[class="wishlist-product_2rk-"]')
    this.initPage()

  }

  heartIconClick = async () => {
    waitForElementToBeVisible(this.heartIcon, 3000)
    await this.heartIcon.click()
  }

  wishListClick = async () => {
    await this.wishList.click()

  }

  addItemToWishList = async () => {
    return await this.PrductInfo.textContent()
  }
  removeItemFtomWishList = async () => {
    await this.removeButton.click()


  }



}