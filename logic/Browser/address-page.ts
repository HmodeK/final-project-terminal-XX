import { Locator, Page } from "playwright";
import { waitForElementToBeVisible } from "../../infra/utils/wait-for-elements"
import { BasePage } from "../../infra/browser/base-page";
export class AddressPage extends BasePage {
   
    private  addressIsAdded: Locator;

    constructor(page: Page) {
        super(page)
        this.addressIsAdded = page.locator('[class="table-wrap-body_3QCY rtl_1cnX"]')
        this.initPage();
    }
    checkIfAddressAdded = async() =>{
        await waitForElementToBeVisible(this.addressIsAdded, 1000,10)
        return await this.page.textContent('body');
    }
}
