import { lcov } from "node:test/reporters";
import { BasePage } from "../../infra/base-page";
import { Locator , Page } from "playwright";

export class ProductsPage extends BasePage {
    
    private filterOption : Locator
    private filterButton :Locator
    
    
    constructor(page:Page){
        super(page)
        this.filterOption=page.getByText('קטגוריה')
        this.filterButton=page.getByText('LIFESTYLE')
        this.initPage()

    }
    filterOptionClick=async () => {
        await this.filterOption.click()
        }
    
    filterButtonClick =async () => {
        await this.filterButton.click()
        }
        
    filterFunction=async () => {
          this.filterOptionClick()
          this.filterButtonClick()

            }


}