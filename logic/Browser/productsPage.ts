import { BasePage } from "../../infra/browser/base-page";
import { Locator, Page } from "playwright";
import {waitForTimeOut } from "../../infra/utils/wait-for-elements";
export class FilterProducts extends BasePage {

    private filterOption: Locator
    private filterButton: Locator

    constructor(page: Page) {
        super(page)
        this.filterOption = page.locator('[class="header_OqIf"]')
        this.filterButton = page.getByText('ONE SIZE')
        this.initPage()
    }

    filterOptionClick = async () => {
        await this.filterOption.nth(0).click()
    }

    filterButtonClick = async () => {
        await waitForTimeOut(this.page, 3000)
        await this.filterButton.click()
    }

    filterFunction = async () => {
        this.filterOptionClick()
        this.filterButtonClick()
        await waitForTimeOut(this.page, 5000)
    }
}