import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/base-page";
import { waitForElementToBeVisibale } from "../../infra/util";

export class AddressPage extends BasePage {
   
    private  addressIsAdded: Locator;

    constructor(page: Page) {
        super(page)
        this.addressIsAdded = page.locator('[class="table-wrap-body_3QCY rtl_1cnX"]')
        this.initPage();
    }
    checkIfAddressAdded = async() =>{
        await waitForElementToBeVisibale(this.addressIsAdded, 1000,10)
        return await this.page.textContent('body');
    }
}
