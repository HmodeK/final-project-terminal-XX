import { BasePage } from "../../infra/browser/base-page";
import { Locator, Page } from "playwright";
import { waitForElementToBeEnabled } from "../../infra/utils/wait-for-elements";
export class Searching extends BasePage {

    private searchButton: Locator
    private searchFelid : Locator

    constructor(page :Page) {
        super(page)
        this.searchButton = page.locator('//button[@class="search-button_1ENs"]')
        this.searchFelid = page.locator('[data-test="search-input"]')

        this.initPage()
    }

    SearchButtonClick = async () => {
        await waitForElementToBeEnabled(this.searchButton,3000,5)
        await this.searchButton.click()
    }

    SearchFelidClick = async () => {
        await this.searchFelid.click()
    }

    typeSearchTerm = async (term: string) => {
        await this.searchFelid.focus();
        await this.searchFelid.clear();
        await this.searchFelid.type(term);
    }

    performSearch = async (term: string) => {
        await this.SearchButtonClick();
        await this.SearchFelidClick();
        await this.typeSearchTerm(term);
        await this.page.keyboard.press('Enter');
        await this.page.mouse.move(-2000,-2000);
        await this.page.waitForTimeout(5000);  
    }

}