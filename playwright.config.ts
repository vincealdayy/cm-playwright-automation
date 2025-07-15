import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  
  testDir: './tests',
  timeout: process.env.CI ? 60000 : 120000,
  expect: {
    timeout: process.env.CI ? 120000 : 5000,
  },

  
  
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  reporter: process.env.CI 
    ? [['html'], ['github']] 
    : [['list'], ['html']],
    
  use: {
    baseURL: process.env.BASE_URL || 'https://tcmdevaws-lts.contentmanager.tylerapp.com/tcm/',
    headless: !!process.env.CI,
    viewport: { width: 1280, height: 720 },
    actionTimeout: process.env.CI ? 60000 : 120000,
    navigationTimeout: process.env.CI ? 60000 : 120000,
    
    screenshot: process.env.CI ? 'only-on-failure' : 'off',
    video: process.env.CI ? 'retain-on-failure' : 'off',
    trace: process.env.CI ? 'on-first-retry' : 'off',
    
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // CI-specific browser args
        launchOptions: process.env.CI ? {
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        } : {}
      },
    },
  ],
});



//export default defineConfig({

  
  //timeout: 120000,
  // 60 seconds for ALL tests
 // testDir: './tests',
  /* Run tests in files in parallel */
 // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry on CI only */
 // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 // reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  
//use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
   // baseURL: "https://tcmdevaws-lts.contentmanager.tylerapp.com/tcm/",
   // baseURL: 'https://tcmdevaws-head.contentmanager.tylerapp.com/tcm/',


    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   // trace: 'on-first-retry',


 // },
 // },


  
  /* Configure projects for major browsers */
 // projects: [
   // {
    //  name: 'chromium',
    //  use: { ...devices['Desktop Chrome'] },
    //},

   // {
   //   name: 'webkit',
   //   use: { ...devices['Desktop Safari'] },
   // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  //],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
//});
