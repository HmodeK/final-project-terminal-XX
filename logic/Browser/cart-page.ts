import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/base-page";
import { waitForElementToBeVisible } from "../../utils/wait-for-elements";

export class CartPage extends BasePage {

    private itemIsAdded : Locator

    constructor(page:Page){
        super(page)
        this.itemIsAdded = page.locator('//div[@class="cart-item_3yl1 rtl_3YUG"]')
        this.initPage()
    }

    checkTheItemIsAdded = async (): Promise<string> => {
        await waitForElementToBeVisible(this.itemIsAdded,1000,5)
        return await this.itemIsAdded.nth(0).innerText()
    }

}