const loginPage = require('../pages/login');
require("dotenv").config()
Feature("Login")
Scenario("Logging In", async({I})=>{
    await I.amOnPage('/login')
    await loginPage.TextLogin()
    await loginPage.enterUsername(process.env.username);
    await loginPage.enterPassword(process.env.password);
    await loginPage.clickLogin();
})