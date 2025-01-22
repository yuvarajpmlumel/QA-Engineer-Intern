const LoginAction = require('../Components/LoginAction');
require("dotenv").config()
Feature("Login")
Scenario("Logging In", async({I})=>{
    await I.amOnPage('/login')
    await LoginAction.login()
})