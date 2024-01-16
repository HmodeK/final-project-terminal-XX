import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/base-page";


export class MyProfile extends BasePage {

    private profileIcon: Locator
    private MyInfo: Locator

    constructor(page: Page) {
        super(page)
        this.profileIcon = page.locator('[class="profile_3CiC rtl_6mEj"]')
        this.MyInfo = page.getByText('הפרטים שלי')
        this.initPage()
    }

    prfileIconClick = async () => {
        await this.profileIcon.click()
    }

    myInfoClick = async () => {
        await this.MyInfo.click()
    }

    myInfoContent = async () => {
        return await this.page.textContent('body');


    }
    myProfile = async () => {
        await this.prfileIconClick()
        await this.myInfoClick()
    }



}