import {Page, expect} from '@playwright/test'

export class CreateDocumentPage {
  page: Page;
    constructor(page: Page) {
      this.page = page;
    }

    async clickOnSelectFiles() {
      const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        this.page.click('#btnSelecFiles')
      ]) 
      
    await fileChooser.setFiles('documentUploads/tylerDoc.pdf')
    await this.page.waitForTimeout(10000)

    await expect(this.page.frameLocator('#webdriver-1').locator('div#pageSection1')).toBeVisible()
    }

 }

