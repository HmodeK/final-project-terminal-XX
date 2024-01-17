import { BasePage } from "../../infra/browser/base-page";
import { Locator,Page } from "playwright";

export class WishListPage extends BasePage {

    private heartIcon: Locator
    constructor(page: Page) {
        super(page)
        this.heartIcon = page.locator('[data-test-id="qa-link-wishlist"]')
        this.initPage()
    }

    heartIconClick = async () => {
        await this.heartIcon.click()
    }
}