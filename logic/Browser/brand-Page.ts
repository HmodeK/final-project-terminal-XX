import { BasePage } from "../../infra/browser/base-page";
import { Locator, Page } from "playwright";

export class BrandPage extends BasePage {

    private brandIcon: Locator

    constructor(page: Page) {
        super(page)
        this.brandIcon = page.getByAltText('adidas')
        this.initPage()
    }
    brandClick = async () => {
        await this.brandIcon.click()
    }
}