import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/browser/base-page";
import { waitForElementToBeVisible } from "../../infra/utils/wait-for-elements";

export class Header extends BasePage {

    private loggedinUsername: Locator
    private womenLabel: Locator
    private womenTypeOfItem: Locator
    constructor(page: Page) {
        super(page)
        this.loggedinUsername = page.locator('//span[@class="profile-button-new-menu-underline_1fv_"]')
        this.womenLabel = page.locator('//li[@class="item_1lit"]');
        this.womenTypeOfItem = page.locator('//*[@id="app-root"]/div[2]/header/div[2]/div[4]/div[2]/div[3]/div/ul/li[4]/ul/li[2]/a')
        this.initPage()
    }

    getLoggedinUserName = async (): Promise<string> => {
        return await this.loggedinUsername.innerText()
    }
    hoverOnWomenLabel = async () => {
        await waitForElementToBeVisible(this.loggedinUsername, 1000, 5)
        await this.womenLabel.nth(2).hover()
    }
    clickOnWomenTypeOfItem = async () => {
        await waitForElementToBeVisible(this.loggedinUsername, 3000, 5)
        await this.womenTypeOfItem.click()
    }
    goToWomenPage = async () => {
        await this.hoverOnWomenLabel()
        await this.clickOnWomenTypeOfItem()
    }
}