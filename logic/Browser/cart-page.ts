import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/browser/base-page";
import { waitForElementToBeEnabled, waitForElementToBeVisible } from "../../infra/utils/wait-for-elements";

export class CartPage extends BasePage {

    private itemIsAdded: Locator
    private removeItem: Locator

    constructor(page: Page) {
        super(page)
        this.itemIsAdded = page.locator("//div[@class='cart-items-list_wmqo']/div")
        this.removeItem = page.locator('//div[@data-tip="הסר פריט"]')
        this.initPage()
    }

    checkTheItemIsAdded = async () => {
        const result = await waitForElementToBeVisible(this.itemIsAdded.first())
        if (!result) { throw new Error("Locator is not visible!") }
        return await this.itemIsAdded.count();
    }

    removeItemFromCart = async () => {
        await waitForElementToBeEnabled(this.removeItem, 1000, 5)
        await this.removeItem.click()
    }
}