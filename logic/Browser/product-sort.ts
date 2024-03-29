import { BasePage } from "../../infra/browser/base-page";
import { Locator, Page } from "playwright";

export class ProductSort extends BasePage {

    private showByButton: Locator
    constructor(page: Page) {
        super(page)
        this.showByButton = page.locator('//select[@name="sortField"]')
        this.initPage()
    }

    selectCategoryBy = async (category: string) => {
        await this.showByButton.selectOption(category)
    }

    getProductTitle = async (): Promise<string> => {
        return await this.showByButton.innerText()
    }
}