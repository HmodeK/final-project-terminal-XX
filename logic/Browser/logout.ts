import { BasePage } from "../../infra/base-page";
import {  Locator,  Page } from 'playwright';
 
export class Logout extends BasePage {

    private profileLogo :Locator
    private logoutButoon :Locator

    constructor( page : Page){
        super(page)
        this.profileLogo=page.locator('[data-test-id="qa-header-profile-button"]')
        this.logoutButoon=page.getByText('Log Out')
        this.initPage()

    }

    logoutLogoClick=async () => {
        await this.profileLogo.click()
        }
    
    LogoutButtonClick =async () => {
        await this.logoutButoon.click()
        }
    progileLogoContent =async () => {
           return await this.page.textContent('body');

            }
        

    makeLogout =async () => {
            await this.logoutLogoClick()
            await this.LogoutButtonClick()
        }
        
    }