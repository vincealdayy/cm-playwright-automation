import { test, expect, chromium, Locator } from '@playwright/test';


test('login', async ({ page }) => {

  const username = process.env.USERNAME!;
  const password = process.env.PASSWORD!;

  await page.goto('https://tcmdevaws-head.contentmanager.tylerapp.com/tcm/');
  await page.fill('#username', process.env.USER_NAME!);
  await page.fill('#password', process.env.PASSWORD!);
  await page.click('button[value=Submit]');

  await page.waitForURL('https://tcmdevaws-head.contentmanager.tylerapp.com/tcm/');

  // Expect a URL "to contain" a substring.
  await expect(page).toHaveURL(/tcm/);
});

