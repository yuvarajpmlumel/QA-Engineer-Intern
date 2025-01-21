const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);
setHeadlessWhen(false);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: ['./tests/LoginTest.js','./tests/dashboardTest.js'],
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth',
      show: true,
      chromium : { headless : false},
      waitForTimeout: 60000,
      waitForNavigation: "networkidle0"
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'CodeceptJSPlayground'
}