import { lcov } from "node:test/reporters";
import { BasePage } from "../infra/base-page";
import { Locator , Page } from "playwright";

export class ProductsPage extends BasePage {
    
    private filterOption :Locator
    constructor(page : Page){
        this.filterOption.locator();

    }




}