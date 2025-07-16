import {Page, expect} from '@playwright/test'

export async function waitForInput(locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
    await expect(locator).toBeEditable();
}