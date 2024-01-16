import { Page } from "playwright";

export class BasePage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    initPage = async () => {
        await this.page.waitForLoadState("load")
    }

    async refreshPage(){
        await this.page.reload();
    }
}

