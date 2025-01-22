const LoginAction = require('../Components/LoginAction');
const dashboardPage = require('../pages/dashboard');
const LeavePage = require('../pages/LeavePage');
require("dotenv").config()
Feature("Dashboard")
Scenario("Checking Dashboard", async({I})=>{
    await I.amOnPage('/login')
    await LoginAction.login()
    await dashboardPage.toLeavePage()
    await LeavePage.enterFromDate('2024-01-01')
    await LeavePage.enterToDate('2025-01-01')
    await LeavePage.clickSubmit()

})