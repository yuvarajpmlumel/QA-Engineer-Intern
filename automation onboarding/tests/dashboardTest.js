const loginPage = require('../pages/login');
const dashboardPage = require('../pages/dashboard');
require("dotenv").config()
Feature("Dashboard")
Scenario("Checking Dashboard", async({I})=>{
    await I.amOnPage('/login')
    await loginPage.TextLogin()
    await loginPage.enterUsername(process.env.username);
    await loginPage.enterPassword(process.env.password);
    await loginPage.clickLogin();
    // pause()
    // await dashboardPage.isTimesheetApproveVisible()
    await dashboardPage.isPendingSelfVisible()
    await dashboardPage.isCandidateToInterviewVisible()
    await dashboardPage.isPunchedOutVisible()
})