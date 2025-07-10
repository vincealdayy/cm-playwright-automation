import {Page, expect, } from '@playwright/test'

export class SettingsPage {
  page: Page;
    constructor(page: Page) {
      this.page = page;
    }

    async clickOnUserPermission() {
        await this.page.getByText('User Permissions and Groups').click();
        await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
    }

    async clickOnCreateBtn() {
        await this.page.locator('[title="Add Entry"]').click()
    }


}

