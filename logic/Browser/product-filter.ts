import { BasePage } from "../../infra/browser/base-page";
import { Locator, Page } from "playwright";
import {waitForElementToBeVisible} from "../../infra/utils/wait-for-elements";
export class FilterProducts extends BasePage {

    private filterOption: Locator
    private selectSizeOptionButton: Locator
    private productTitle: Locator

    constructor(page: Page) {
        super(page)
        this.filterOption = page.locator('[class="header_OqIf"]')
        this.selectSizeOptionButton = page.locator('//ol[@class="filter-items_1wKn"]//li')
        this.productTitle = page.locator('//h1[@title="מכנסיים ארוכים"]')
        this.initPage()
    }

    filterOptionClick = async () => {
        await waitForElementToBeVisible(this.selectSizeOptionButton.first(),3000,5)
        await this.filterOption.first().click()
    }
    selectSizeOption = async () => {
        await waitForElementToBeVisible(this.selectSizeOptionButton.first(),3000,5)
        await this.selectSizeOptionButton.first().click()

    }

    filterFlow = async () => {
        await this.filterOptionClick()
        await this.selectSizeOption()
    }

    getProductTitle = async (): Promise<string> => {
        return await this.productTitle.innerText()
    }
}