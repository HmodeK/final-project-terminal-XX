import { privateDecrypt } from "crypto";
import { BasePage } from "../infra/base-page";
import { Locator , Page } from "playwright";

export class LongPantsPage extends BasePage{

    private showByButton : Locator

    constructor(page:Page){
        super(page)
        this.showByButton = page.locator('//select[@name="sortField"]')
        this.initPage()
    }


    selectCategoryBy = async (category:string) => {
        await this.showByButton.selectOption(category)
        
    } 

    
    
}