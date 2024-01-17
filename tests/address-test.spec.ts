import { test, Page, expect } from '@playwright/test'
import configJson from "../config.json"
import { addressRequest, setAddressRequest } from '../logic/Api/request-body/address-api-request';
import { AddressPage } from '../logic/Browser/address-page';
import { BrowserWrapper } from '../infra/browser-wrapper';
import { addAddress } from '../logic/Api/address-Api';
import { DeleteAddress } from '../logic/Browser/delete-address';

test.describe('Add Address Test', () => {
    let page: Page;
    let browser: BrowserWrapper;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test("Adding address", async ({ request }) => {
        const addressData: addressRequest = setAddressRequest('hmode', 'kanaan');
        await addAddress(addressData);

        page = await browser.getPage(configJson.address)
        const addressPage = new AddressPage(page)
        expect(await addressPage.checkIfAddressAdded()).toContain("אל-יקין")
        const deleteAddress = new DeleteAddress(page)
        await page.waitForTimeout(5000)
        expect(deleteAddress.checkIfAddressDeleted)

    });
});