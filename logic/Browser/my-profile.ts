import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/browser/base-page";


export class MyProfile extends BasePage {

    private profileIcon: Locator
    private myInfo: Locator

    constructor(page: Page) {
        super(page)
        this.profileIcon = page.locator('[class="profile_3CiC rtl_6mEj"]')
        this.myInfo = page.locator('//ul[@class="list_N0wM rtl_1phs"]//li')
        this.initPage()
    }

    prfileIconClick = async () => {
        await this.profileIcon.click()
    }
    myInfoClick = async () => {
        await this.myInfo.nth(2).click()
    }
    myInfoContent = async () => {
        return await this.page.textContent('body');

    }
    myProfile = async () => {
        await this.prfileIconClick()
        await this.myInfoClick()
    }
}