import { BasePage } from "../infra/base-page";
import { Locator , Page } from "playwright";
import { waitForElementToBeVisible } from "../wait-for-elements";

export class Header extends BasePage{
    
    private loginButton: Locator
    private loginLabel: Locator
    constructor(page:Page){
        super(page)
        this.loginButton = page.locator('[data-test-id="qa-header-login-button"]');
        this.loginLabel = page.locator('//div[@class="profile-btn-wrapper_EvqV"]')
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

   
 }
 