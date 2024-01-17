import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/browser/base-page"
import { waitForElementToBeVisible } from "../../infra/utils/wait-for-elements";

export class DeleteAddress extends BasePage {

    private deleteAddressAdded: Locator;
    private approveClick: Locator;

    constructor(page: Page) {
        super(page)
        this.deleteAddressAdded = page.locator('//button[@class="tx-link-a links-item_3GWv red-link_1kcf tx-link_29YD underline-hover_3GkV"]')
        this.approveClick = page.locator('//button[@class="tx-link-a button_1zfx tx-link_29YD btn_1UzJ btn-black-gray_2ddt"]')
        this.initPage();
    }
    deleteAddressClick = async () => {
        await this.deleteAddressAdded.click()
    }

    approvedClick = async () => {
        await waitForElementToBeVisible(this.approveClick.first(), 3000, 5)
        await this.approveClick.first().click()
    }

    checkIfAddressDeleted = async () => {
        await this.deleteAddressClick();
        await this.approvedClick();
    }
}