import { test, Page, expect } from '@playwright/test'
import { buildAddressRequest } from '../logic/api/request-body/address-api-request';
import { AddressPage } from '../logic/Browser/address-page';
import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { apiCalls } from '../logic/api/address-Api';
import { DeleteAddress } from '../logic/Browser/delete-address';
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
        await page.waitForTimeout(5000)
        await browser.closeBrowser()
    })

    test("Adding address", async ({ }) => {
        const { firstname, lastname, postcode, telephone, city, country_id } = { ...users.address1 }
        const { streetName, streetNumber, homeNumber } = { ...users.address1.street }
        const addressData = buildAddressRequest(firstname, lastname, postcode, telephone, city, country_id, { streetName, streetNumber, homeNumber })

        await addAddress(addressData);

        page = await browser.getPage(urls.uiUrl.address)
        const addressPage = new AddressPage(page)
        expect(await addressPage.checkIfAddressAdded()).toContain( "מג'ד אל כרום")
    });
});      