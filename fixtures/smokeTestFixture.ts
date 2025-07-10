import {test as base} from '@playwright/test'
import { LoginPage } from '../src/pageObjects/login.po'
import { DocumentSearchPage } from '../src/pageObjects/documentSearch.po';
import { Navigation } from '../src/pageObjects/common/navigation.po';
import {CreateDocumentPage} from '../src/pageObjects/createDocument.po';
import { SettingsPage } from '../src/pageObjects/settings.po';

type smokeTestFixtures = {
  loginPage: LoginPage;
  documentSearchPage: DocumentSearchPage;
  navigation: Navigation;
  createDocumentPage: CreateDocumentPage;
  settingsPage: SettingsPage;
};

export const test = base.extend<smokeTestFixtures>({
    loginPage: async ({ page }, use) => {
        const lp = new LoginPage(page);
        await lp.loginValidUser();
        await use(lp);
      },

      navigation: async ({ loginPage }, use) => {
        const nav = new Navigation(loginPage.page);
        await use(nav);
      },

      documentSearchPage: async ({ loginPage }, use) => {
        const documentSearchPage = new DocumentSearchPage(loginPage.page);
        await use(documentSearchPage);
      },

      createDocumentPage: async ({ loginPage }, use) => {
        const createDocumentPage = new CreateDocumentPage(loginPage.page);
        await use(createDocumentPage);
      },

      settingsPage: async ({ loginPage }, use) => {
        const settingsPage = new SettingsPage(loginPage.page);
        await use(settingsPage);
      },
 
});

export { expect } from '@playwright/test';
