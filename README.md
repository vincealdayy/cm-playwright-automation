# 🎭 Playwright



## [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

|          | Linux | macOS | Windows |
|   :---   | :---: | :---: | :---:   |
| Chromium <!-- GEN:chromium-version -->139.0.7258.5<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->18.5<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->140.0.2<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |


## Installation

Please install node.js first in your computer else download it on our workspace hub.

**In your terminal:**
```Shell
#HTTPS
git clone https://github.com/tyler-technologies/cm-automation-playwright.git
```
### Using init command

The easiest way to get started with Playwright Test is to run the init command.

```Shell
# Run from your project's root directory
npm init playwright@latest
# Or create a new project
npm init playwright@latest new-project
```

This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts. You can now jump directly to writing assertions section.

### Manually

Add dependency and install browsers.

```Shell
npm i -D @playwright/test
# install supported browsers
npx playwright install
```



## How to your Run Test

### Command line
You can run your tests with the playwright test command. This will run your tests on all browsers as configured in the playwright.config file. Tests run in headless mode by default meaning no browser window will be opened while running the tests and results will be seen in the terminal.
```Shell
npx playwright test
```

### Run tests in headed mode
To run your tests in headed mode, use the --headed flag. This will give you the ability to visually see how Playwright interacts with the website.
```Shell
npx playwright test --headed
```

### Run tests in UI mode
We highly recommend running your tests with UI Mode for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during and after each step. UI mode also comes with many other features such as the locator picker, watch mode and more.

```Shell
npx playwright test --ui
```


### Run tests in Debug mode
Run in debug mode
Run your tests with the --debug flag to open the inspector. This configures Playwright for debugging and opens the inspector. Additional useful defaults are configured when --debug is used:

Browsers launch in headed mode
Default timeout is set to 0 (= no timeout)
Debug all tests on all browsers
To debug all tests run the test command with the --debug flag. This will run tests one by one, and open the inspector and a browser window for each test.

```Shell
npx playwright test --debug
``

Debug one test on all browsers
To debug one test on a specific line, run the test command followed by the name of the test file and the line number of the test you want to debug, followed by the --debug flag. This will run a single test in each browser configured in your playwright.config and open the inspector.

```Shell
npx playwright test example.spec.ts:10 --debug
``

### Run specific tests

To run a single test file, pass in the name of the test file that you want to run.
```Shell
npx playwright test landing-page.spec.ts
```
To run a set of test files from different directories, pass in the names of the directories that you want to run the tests in.
```Shell
npx playwright test tests/todo-page/ tests/landing-page/
```
To run a test with a specific title, use the -g flag followed by the title of the test.
```Shell
npx playwright test -g "add a todo item"
```

## Capabilities

### Resilient • No flaky tests

**Auto-wait**. Playwright waits for elements to be actionable prior to performing actions. It also has a rich set of introspection events. The combination of the two eliminates the need for artificial timeouts - a primary cause of flaky tests.

**Web-first assertions**. Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met.

**Tracing**. Configure test retry strategy, capture execution trace, videos and screenshots to eliminate flakes.

### No trade-offs • No limits

Browsers run web content belonging to different origins in different processes. Playwright is aligned with the architecture of the modern browsers and runs tests out-of-process. This makes Playwright free of the typical in-process test runner limitations.

**Multiple everything**. Test scenarios that span multiple tabs, multiple origins and multiple users. Create scenarios with different contexts for different users and run them against your server, all in one test.

**Trusted events**. Hover elements, interact with dynamic controls and produce trusted events. Playwright uses real browser input pipeline indistinguishable from the real user.

Test frames, pierce Shadow DOM. Playwright selectors pierce shadow DOM and allow entering frames seamlessly.

### Full isolation • Fast execution

**Browser contexts**. Playwright creates a browser context for each test. Browser context is equivalent to a brand new browser profile. This delivers full test isolation with zero overhead. Creating a new browser context only takes a handful of milliseconds.

**Log in once**. Save the authentication state of the context and reuse it in all the tests. This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.


## Resources

* [Documentation](https://playwright.dev)
* [API reference](https://playwright.dev/docs/api/class-playwright/)
* [Contribution guide](CONTRIBUTING.md)
* [Changelog](https://github.com/microsoft/playwright/releases)
