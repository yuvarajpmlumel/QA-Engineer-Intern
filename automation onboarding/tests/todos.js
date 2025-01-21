const arr = ["Drink Water Every Hour","Exercise Daily","Clean the House","Meditate Daily"]
const assert = require("assert")
Feature("To-do")

Scenario.only("Tasks", async ({I})=> {
    await I.amOnPage("https://todomvc.com/examples/react/dist/")
    await I.addTask(arr)
    await I.click("All")
    const itemsLeft = await I.checkItemsLeft()
    assert.equal(itemsLeft,"4 items left!")

    await I.markTaskAsCompleted("Drink Water Every Hour")
    await I.markTaskAsCompleted("Exercise Daily")
    // const msg = await I.checkItemsLeft(2)
    // assert.equal(msg,"4 items left!")
    await I.checkItemsLeft(2)

    // await I.deleteTask(3);
    // await I.checkItemsLeft(1)       
    
    // await I.click("Active")
    // await I.checkActiveListTask()
    // await I.click("Completed")
    // await I.checkCompletedListTask()
})
