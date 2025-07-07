import {expect, Page} from '@playwright/test'

export class Navigation {

constructor(private page: Page) {}

    async navigateTo(urlPath: string) {
        await this.page.goto(`${urlPath}`)
        // await this.page.waitForSelector(`#SystemKeywordID_input`)
        await this.page.waitForTimeout(60000)
        await expect(this.page.locator('#SystemKeywordID_input')).toBeVisible()

    }
}
