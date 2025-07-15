import {Locator, Page, expect, } from '@playwright/test'

export class SettingsPage {
  page: Page;
  readonly createUserBtn: Locator;

    constructor(page: Page) {
      this.page = page;

      this.createUserBtn = page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('button', { name: 'Create' })
    }

    async clickOnSecurity() {
      await this.page.getByRole('button', { name: 'Security' }).click();
      await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
  }

    async clickOnUserPermission() {
        await this.page.locator('#security div').first().click();
        await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
    }

    async clickOnCreateBtn() {
      //  await this.page.locator('#securityItemFrame').contentFrame().getByRole('button', { name: 'Create' }).click();
      await this.createUserBtn.click()
    }

    async enterUserID(input: string){
      await this.page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('textbox', { name: 'User ID' }).fill(input);
     
    }

    async enterUserName(input: string){
      await this.page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('textbox', { name: 'LK_USER_NAME;' }).fill(input);
    }

    async clickVaadinSave() {
      await this.page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('button', { name: 'Save' }).click();
      await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
      
    }

    async columnSearch(value: string) {
      await this.page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('textbox', { name: 'User ID' }).fill(value)
      await this.page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('textbox', { name: 'User Name' }).click();
      await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
    }
    async deleteUser() {
      await this.page.mouse.wheel(300, 0);
      await this.page.locator('#securityItemFrame').contentFrame().getByRole('button', { name: 'Remove Entry' }).click();
      await this.page.locator('#securityItemFrame').contentFrame().getByRole('button', { name: 'Remove', exact: true }).click();
      await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
      await this.page.pause()
    }
    
}
 