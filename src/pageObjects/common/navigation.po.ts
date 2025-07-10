import {expect, Page} from '@playwright/test'
import { CreateDocumentPage } from '../createDocument.po';

export class Navigation {

constructor(private page: Page) {}

    async navigateTo(urlPath: string) {
        await this.page.goto(`${urlPath}`)
        // await this.page.waitForSelector(`#SystemKeywordID_input`)
        await expect(this.page.locator('#searchClear')).toBeVisible({ timeout: 90000 });

    }

    async clickOnCreateDocumentBtn(): Promise<CreateDocumentPage> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.click('div.createButton')
        ])

        await newPage.waitForLoadState('domcontentloaded')
        return new CreateDocumentPage(newPage);

        expect(this.page.url).toContain('ecmdocviewer')
        
    }

    async clickOnSettings() {
        await this.page.locator(`tcw-list-item#setup`).click()
        await this.page.waitForLoadState('domcontentloaded', {timeout: 30000})
    }

    

    // [title="Add Entry"]
}
