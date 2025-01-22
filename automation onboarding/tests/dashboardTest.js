const LoginAction = require('../Components/LoginAction');
const dashboardPage = require('../pages/dashboard');
require("dotenv").config()
Feature("Dashboard")
Scenario("Checking Dashboard", async({I})=>{
    await I.amOnPage('/login')
    await LoginAction.login()
    await dashboardPage.isPendingSelfVisible()
    await dashboardPage.isCandidateToInterviewVisible()
    await dashboardPage.isPunchedOutVisible()
})