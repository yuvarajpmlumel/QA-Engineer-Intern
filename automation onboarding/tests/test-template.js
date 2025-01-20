Feature('Accessing Website')

const assert = require('assert')
Scenario("Checking the website information", async ({I})=>{
   I.amOnPage("/Register.html")
  const title = await I.grabTitle()
  // console.log(await I.)
  assert.equal("Register",title)
})
Scenario("Checking the website title", async ({I})=>{
  I.amOnPage("/Register.html")
  I.seeInTitle("Register")
})

Scenario.only("Filling data", async ({I})=> {
  I.amOnPage("/Register.html")
  I.fillField("First Name","Yuvaraj")
  I.fillField("//input[@type='email']","yvu@gmail.com")
  I.fillField("//textarea[@ng-model='Adress']","P hwfiwhfowofhwof")
  I.fillField("//input[@type='tel']","P")
})