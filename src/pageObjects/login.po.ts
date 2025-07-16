import {Page, expect} from '@playwright/test'

export class LoginPage {
    constructor(public page: Page) {
    }

    
async enterUsername() {
   // await this.page.goto('https://tcmdevaws-head.contentmanager.tylerapp.com/tcm/');
  // await this.page.fill('#username', process.env.USER_NAME!);
    await this.page.goto('https://tcmdevaws-lts.contentmanager.tylerapp.com/tcm/');
    await this.page.fill('#idp-discovery-username', process.env.USER_NAME!);
}

async clicknext() {
    // await this.page.fill('#password', process.env.PASSWORD!);
     await this.page.click('#idp-discovery-submit')
 }
 
async enterPassword() {
   // await this.page.fill('#password', process.env.PASSWORD!);
    await this.page.fill('#okta-signin-password', process.env.PASSWORD!);
}

async clickLoginButton() {
    //await this.page.click('button[value=Submit]');
    //await this.page.waitForURL('https://tcmdevaws-head.contentmanager.tylerapp.com/tcm/')

    await this.page.click('#okta-signin-submit')
    await this.page.waitForURL('https://tcmdevaws-lts.contentmanager.tylerapp.com/tcm/')
    await this.page.waitForTimeout(10000)
}

async loginValidUser() {
    await this.enterUsername()
    await this.clicknext()
    await this.enterPassword()
    await this.clickLoginButton()
    await this.page.context().storageState({path: ".auth/login.json"})
}

}