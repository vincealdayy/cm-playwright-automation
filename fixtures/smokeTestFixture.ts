import {test as base, Page} from '@playwright/test'
import { LoginPage } from '../src/pageObjects/login.po'
import { DocumentSearchPage } from '../src/pageObjects/documentSearch.po';
import { Navigation } from '../src/pageObjects/common/navigation.po';

type smokeTestFixtures = {
  loginPage: LoginPage;
  documentSearchPage: DocumentSearchPage;
  navigation: Navigation;
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
 

});

export { expect } from '@playwright/test';
