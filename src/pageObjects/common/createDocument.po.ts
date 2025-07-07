import {Page, expect} from '@playwright/test'

export class CreateDocumentPage {
    constructor(private page: Page) {}

    async createDoc() {
        // Wait for the popup event *while* clicking the button
        const [popup] = await Promise.all([
          this.page.waitForEvent('popup'),
          this.page.click('.createButton')
        ]);
        await popup.waitForLoadState(); // waits for the new tab to load its content
      await expect(popup).toHaveURL(/ecmdocviewer/);
        // Now you can interact with the new popup (tab)
        // For example:
        this.page.click('#btnSelecFiles')
        return popup; // return the popup page if you want to keep using it
      }
 }

