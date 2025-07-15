import {Locator, Page, expect, } from '@playwright/test'

export class SettingsPage {
  page: Page;
  readonly createUserBtn: Locator;

    constructor(page: Page) {
      this.page = page;

      this.createUserBtn = page.locator('#securityItemFrame').contentFrame().getByRole('button', { name: 'Create' })
    }

    async clickOnUserPermission() {
        await this.page.getByText('User Permissions and Groups').click();
        await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
    }

    async clickOnCreateBtn() {
      //  await this.page.locator('#securityItemFrame').contentFrame().getByRole('button', { name: 'Create' }).click();
      await this.createUserBtn.click()
      await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
    }

    async enterUserID(input: string){
      await this.page.locator('#securityItemFrame').contentFrame().locator('#input-vaadin-text-field-101').fill(input);
      await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
    }

    async enterUserName(input: string){
      await this.page.locator('#securityItemFrame').contentFrame().locator('#input-vaadin-text-field-102').fill(input);
    }

    async clickVaadinSave() {
      await this.page.locator('#securityItemFrame').contentFrame().getByRole('button', { name: 'Save' }).click();
      await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
      
    }

    async columnSearch(value: string) {
      await this.page.locator('#securityItemFrame').contentFrame().locator('#input-vaadin-text-field-62').fill(value)
      await this.page.locator('#securityItemFrame').contentFrame().locator('#input-vaadin-text-field-63').click();
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
 