import { test, Page, expect } from '@playwright/test'
import { buildAddressRequest } from '../logic/api/request-body/add-address-api-request';
import { AddressPage } from '../logic/browser/address-page';
import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { ApiCalls } from "../logic/api/api-request";
import { DeleteAddress } from '../logic/browser/delete-address';
import urls from "../configFiles/urls.json"
import users from "../configFiles/user-details.json"

test.describe('Add Address Test', () => {
    let page: Page;
    let browser: BrowserWrapper;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });
    test.afterEach(async () => {
        page = await browser.getPage(urls.uiUrl.address)
        const deleteAddress = new DeleteAddress(page)
        await deleteAddress.checkIfAddressDeleted()
        await browser.closeBrowser()
    })

    test("add  address to adresses via Api & validating if address is added via Ui", async ({ }) => {
        const { firstname, lastname, postcode, telephone, city, country_id } = { ...users.address1 }
        const { streetName, streetNumber, homeNumber } = { ...users.address1.street }
        const addressData = buildAddressRequest(firstname, lastname, postcode, telephone, city, country_id, { streetName, streetNumber, homeNumber })
        const api = new ApiCalls()
        await api.addAddress(addressData);
        page = await browser.getPage(urls.uiUrl.address)
        const addressPage = new AddressPage(page)
        expect(await addressPage.checkIfAddressAdded()).toContain( "מג'ד אל כרום")
    });
});      