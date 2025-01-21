const arr = ["Drink Water Every Hour","Exercise Daily","Clean the House","Meditate Daily"]
const assert = require("assert")
Feature("To-do")

Scenario.only("Tasks", async ({I})=> {
    await I.amOnPage("https://todomvc.com/examples/react/dist/")
    await I.addTask(arr)
    await I.click("All")
    let itemsLeft = await I.checkItemsLeft()
    assert.equal(itemsLeft,"4 items left!")
    
    await I.markTaskAsCompleted("Drink Water Every Hour")
    await I.markTaskAsCompleted("Exercise Daily")
    itemsLeft = await I.checkItemsLeft()
    assert.equal(itemsLeft,"2 items left!")
    
    await I.deleteTask("Clean the House");
    itemsLeft = await I.checkItemsLeft()
    assert.equal(itemsLeft,"1 item left!")
    
    await I.click("Active")
    await I.checkActiveListTask()
    await I.click("Completed")
    await I.checkCompletedListTask()
})
