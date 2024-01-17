import { Browser, Page, test, expect } from "@playwright/test";
import { chromium } from "playwright";
export class BrowserWrapper {

    browser: Browser | undefined
    page: Page | undefined

    async getPage(url: string) {
        this.browser = await chromium.launch();
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        if (url) {
            await this.page.goto(url);
        }
        return this.page
    }
    async maximizeWindow() {
        if (this.page) {
            await this.page.setViewportSize({ width: 1920, height: 1080 });
        }
    }
    async closeBrowser() {
        if (this.page) {
            await this.page.close();
        }
        if (this.browser) {
            await this.browser.close()
        }
    }
}