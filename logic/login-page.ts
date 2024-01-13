import { BasePage } from "../infra/base-page";
import { Locator , Page } from "playwright";

export class LoginPage extends BasePage{

private emailInput : Locator
private passwordInput : Locator
private loginButton : Locator

constructor(page : Page){
    super(page)
    this.emailInput = page.locator('//input[@name="email"]')
    this.passwordInput = page.locator('//input[@type="password"]')
    this.loginButton = page.locator('//button[@type="submit"]')
    this.initPage()
}


fillEmail = async(email : string) => {

await this.emailInput.nth(1).fill(email)
}

fillPassword = async(password : string) => {
await this.passwordInput.fill(password)
}

clickLoginButton = async () => {
await this.loginButton.nth(1).click()
}


makeLogin =async (email:string,password:string) => {
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.clickLoginButton()
}


}