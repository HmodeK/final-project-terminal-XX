import { BasePage } from "../../infra/browser/base-page";
import { Locator, Page } from "playwright";
export class Searching extends BasePage {

    private searchButton: Locator
    private searchFelid: Locator
    private searchResult: Locator

    constructor(page: Page) {
        super(page)
        this.searchButton = page.locator('[data-test-id="qa-header-search-button"]')
        this.searchFelid = page.locator('[data-test="search-input"]')
        this.searchResult = page.locator('[data-test-id="qa-search-results-page-title"]')
        this.initPage()
    }

    SearchButtonClick = async () => {
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
    searchContent = async () => {
        return await this.searchResult.innerText();
    }
    performSearch = async (term: string) => {
        await this.SearchButtonClick();
        await this.SearchFelidClick();
        await this.typeSearchTerm(term);
        await this.page.keyboard.press('Enter');
    }
}