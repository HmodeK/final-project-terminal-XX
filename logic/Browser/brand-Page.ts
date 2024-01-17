import { BasePage } from "../../infra/browser/base-page";
import { Locator, Page } from "playwright";

export class BrandPage extends BasePage {

    private brandIcon: Locator
    private adidasProduct :Locator

    constructor(page: Page) {
        super(page)
        this.brandIcon = page.getByAltText('adidas')
        this.adidasProduct=page.locator('[class="listing-product_3mjp"]')
        this.initPage()
    }
    brandClick = async () => {
        await this.brandIcon.click()
    }
    productListContnet =async () => {
        return this.adidasProduct.first().textContent()
    }
}