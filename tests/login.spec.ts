import { test, expect, chromium, Locator } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('login', async ({ page }) => {

  const username = process.env.USERNAME!;
  const password = process.env.PASSWORD!;

  await page.goto('https://express-prod.tylerhost.net/tcm/internal-tcmtmm-qa-tcm15394/authorizationserver/login');
  const UserName:Locator = await page.locator('#username');
  const Password:Locator = await page.locator('#password');
  const loginSubmit:Locator = await page.locator("[value='Submit']");

  UserName.fill, username;
  Password.fill, password;
  loginSubmit.click();


  // Expect a URL "to contain" a substring.
  await expect(page).toHaveURL(/tcm/);
});

