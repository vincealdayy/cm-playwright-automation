import {Page, expect} from '@playwright/test'

export class LoginPage {
    constructor(public page: Page) {
    }

    
async enterUsername() {
    await this.page.goto('https://tcmdevaws-head.contentmanager.tylerapp.com/tcm/');
    await this.page.fill('#username', process.env.USER_NAME!);
}

async enterPassword() {
    await this.page.fill('#password', process.env.PASSWORD!);
}

async clickLoginButton() {
    await this.page.click('button[value=Submit]');
    await this.page.waitForURL('https://tcmdevaws-head.contentmanager.tylerapp.com/tcm/')
}

async loginValidUser() {
    await this.enterUsername()
    await this.enterPassword()
    await this.clickLoginButton()
    await this.page.waitForTimeout(5000)
}

}