import {Page, expect} from '@playwright/test'

export class DocumentSearchPage {
    constructor(private page: Page) {}

    async inputName() {
        await this.page.locator('#SystemKeywordID_input').fill('buck')
        await this.page.click('#search')
        await expect(this.page.locator('#apply_all_button')).toBeVisible({ timeout: 90000 });
       // await expect(this.page.getByText('Tyler-Expense-Form-Tyler-Survivor (1).pdf')).toBeVisible({ timeout: 10000 });   
    }   

   // async AdvancedSearch() {
      //  await this.page.pause()
      //  await this.page.locator('#SystemKeywordID_input').fill('buck')
      //  await this.page.click('#search')
      //  await expect(this.page.locator('#apply_all_button')).toBeVisible({ timeout: 90000 });
       // await expect(this.page.getByText('Tyler-Expense-Form-Tyler-Survivor (1).pdf')).toBeVisible({ timeout: 10000 });   
    }  