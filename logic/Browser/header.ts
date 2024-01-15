import { BasePage } from "../../infra/base-page";
import { Locator , Page } from "playwright";
import { waitForElementToBeVisible } from "../../utils/wait-for-elements";

export class Header extends BasePage{
    
    private loginButton: Locator
    private loginLabel: Locator
    private womenLabel : Locator
    private womenTypeOfItem : Locator
    constructor(page:Page){
        super(page)
        this.loginButton = page.locator('[data-test-id="qa-header-login-button"]');
        this.loginLabel = page.locator('//div[@class="profile-btn-wrapper_EvqV"]');
        this.womenLabel = page.locator('//li[@class="item_1lit"]');
        this.womenTypeOfItem = page.locator('//*[@id="app-root"]/div[2]/header/div[2]/div[4]/div[2]/div[3]/div/ul/li[4]/ul/li[2]/a')
        this.initPage()
    }
    navigatToLoginPage =async () => {
        await this.loginButton.click()
    }

    getLoggedInUserName =async (): Promise<string> => {
        const wait = await waitForElementToBeVisible(this.loginLabel,1000,5)
        const getString = await this.loginLabel.innerText();
        return getString
    };



    hoverOnWomenLabel =async () => {
        const wait = await waitForElementToBeVisible(this.loginLabel,1000,5)
        await this.womenLabel.nth(2).hover()
    }
   
    clickOnWomenTypeOfItem = async () => {
        const wait = await waitForElementToBeVisible(this.loginLabel,1000,5)
        await this.womenTypeOfItem.click()
    }

    goToWomenPage = async () => {
        await this.hoverOnWomenLabel()
        await this.clickOnWomenTypeOfItem()
    }
    
}
 