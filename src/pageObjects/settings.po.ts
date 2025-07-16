import {Locator, Page, expect, } from '@playwright/test'
import { waitForInput } from '../helper/helper';

export class SettingsPage {
  page: Page;
  readonly createUserBtn: Locator;
  readonly userIdInpt: Locator;
  readonly userNameInpt: Locator;
  readonly userIdColmnSrch: Locator;
  readonly saveBtn: Locator;

    constructor(page: Page) {
      this.page = page;

      this.createUserBtn = page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('button', { name: 'Create' })
      this.userIdInpt = page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('textbox', { name: 'User ID' })
      this.userNameInpt = page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('textbox', { name: 'LK_USER_NAME;' })
      this.userIdColmnSrch = page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('textbox', { name: 'User ID' })
      this.saveBtn = page.locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('button', { name: 'Save' })
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
      await this.createUserBtn.click()
      await this.page.waitForTimeout(10000)
    }

    async enterUserID(input: string){
      await waitForInput(this.userIdInpt)
      await this.userIdInpt.fill(input);
    }

    async enterUserName(input: string){
      await waitForInput(this.userNameInpt)
      await this.userNameInpt.fill(input);
    }

    async clickVaadinSave() {
      await this.saveBtn.click();
      await this.page.waitForTimeout(10000)
    }

    async columnSearchUserId(value: string) {
      await waitForInput(this.userIdColmnSrch)
      await this.userIdColmnSrch.fill(value)
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(30000)
      await this.page.pause() // locator('iframe[title="User Permissions and Groups content"]').contentFrame().getByRole('button', { name: 'Remove Entry' })
    }

    async deleteUser() {
      await this.page.mouse.wheel(300, 0);
      await this.page.locator('#securityItemFrame').contentFrame().getByRole('button', { name: 'Remove Entry' }).click();
      await this.page.locator('#securityItemFrame').contentFrame().getByRole('button', { name: 'Remove', exact: true }).click();
      await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
      await this.page.pause()
    }
    
}
 