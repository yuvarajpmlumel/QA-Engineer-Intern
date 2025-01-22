const loginPage = require('../pages/login');
require("dotenv").config()
const { I } = inject();

module.exports =  {
async login()  {
    await loginPage.enterUsername(process.env.username);
    await loginPage.enterPassword(process.env.password);
    await loginPage.clickLogin();
},
}