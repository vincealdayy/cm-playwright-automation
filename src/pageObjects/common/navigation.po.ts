import {expect, Page} from '@playwright/test'

export class Navigation {

constructor(private page: Page) {}

    async navigateTo(urlPath: string) {
        await this.page.goto(`${urlPath}`)
        // await this.page.waitForSelector(`#SystemKeywordID_input`)
        await expect(this.page.locator('#searchClear')).toBeVisible({ timeout: 90000 });

    }
}
