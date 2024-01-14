import { BasePage } from "../infra/base-page";
import {  Locator,  Page } from '@playwright/test';

 
export class Logout extends BasePage {

    private profileLogo :Locator
    private logoutButoon :Locator

    constructor(page : Page){

        super(page)
        this.profileLogo=page.locator('//*[@id="app-root"]/div[2]/header/div/div[2]/div[1]/div[1]/div/div/div/button')
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


