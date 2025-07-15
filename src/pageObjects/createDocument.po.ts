import {Page, expect, } from '@playwright/test'

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
    expect(this.page.locator('iframe#webviewer-1')).toBeVisible({timeout:20000})
    await this.page.waitForLoadState('domcontentloaded')
   
  }

  async selectDocType(option: string) {
    
    await this.page.locator('input#docType').fill(option, {timeout: 500})
    // await this.page.keyboard.press('Enter') // #list-dropdown-option-tcw-autocomplete-idzgk-1
    //*[@id="list-dropdown-option-tcw-autocomplete-idzgk-1"]

    this.page.locator('[role="option"][aria-disabled="false"]').filter({ hasText: `${option}` }).click()
    await this.page.waitForTimeout(5000)
  }

  async enterVendorNumber(number: string) {
    await this.page.locator('input#VendorNumber').fill(number)
  }

  async enterYear(year: string) {
    await this.page.locator('input#Year').fill(year)
  }

  async clickOnSaveBtn() {
    await this.page.locator('button#saveDocument').click()
    await this.page.waitForLoadState('domcontentloaded')
  }

  async isToastVisible() : Promise<boolean> {
    try  {
      await this.page.waitForSelector("//tcw-toast[@message= 'Successfully deleted document']", {
        timeout: 10000, 
        state: 'visible'
        });
        return true;
      } catch (e) {
        return false
      }
  }

  async clickElipsesAndDelete() {
    await this.page.getByRole('button', { name: 'Open Actions' }).click()
    await this.page.pause()
    await this.page.locator("//tcw-list-item[text()= 'Delete']").click()
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.locator('#accept-button').click()
    //await expect(this.isToastVisible).toBeTruthy()
  }

 }

