import { lcov } from "node:test/reporters";
import { BasePage } from "../../infra/base-page";
import { Locator , Page } from "playwright";
import { waitForElementToBeVisible } from "../../utils/wait-for-elements";
export class FilterProducts extends BasePage {

    
    private filterOption : Locator
    private filterButton :Locator
    
    
    constructor(page:Page){
        super(page)
        this.filterOption=page.locator('//*[@id="app-root"]/div[2]/main/div[2]/div/div[3]/div[2]/div/div[3]/ol/li[1]/div/div')
        this.filterButton=page.getByText('ONE SIZE')
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