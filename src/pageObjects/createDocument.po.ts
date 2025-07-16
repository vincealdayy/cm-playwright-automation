import { Page, expect, Locator } from '@playwright/test'
import { waitForInput } from '../helper/helper';

export class CreateDocumentPage {
  page: Page;

  readonly docTypeDropdwn: Locator;

    constructor(page: Page) {
      this.page = page;

      this.docTypeDropdwn = page.getByRole('combobox', { name: 'Choose Document Type' })
    }

  async clickOnSelectFiles() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      this.page.click('#btnSelecFiles')
    ]) 
    
    await fileChooser.setFiles('documentUploads/tylerDoc.pdf')
    expect(this.page.locator('iframe#webviewer-1')).toBeVisible({timeout:20000})
    // await this.page.waitForLoadState('networkidle')
    await this.page.waitForTimeout(10000)
   
  }

  async selectDocType(option: string) {
    await waitForInput(this.docTypeDropdwn)
    await this.docTypeDropdwn.fill(option)
    await this.page.keyboard.press('Enter')
    // await this.page.locator('input#docType').fill(option, {timeout: 500})
    // await t
    await this.page.waitForTimeout(20000)
    // await this.page.pause()
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

