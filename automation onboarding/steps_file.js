// in this file you can append custom step methods to 'I' object

module.exports = function() {

  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    async addTask(arr){
      for(let x of arr){
        await this.fillField("//input[@type='text']",x);
        await this.pressKey("Enter");
        await this.seeElement(`//label[contains(text(),"${x}")]`)
      }
    },    
    async checkItemsLeft(){
      return await this.grabTextFrom('.todo-count')
      
    },
    async markTaskAsCompleted(task){
        await this.checkOption(`//label[text()='${task}']/preceding-sibling::input`);
        await this.seeAttributesOnElements(`//li[div/label[text()='${task}']]`,{class : 'completed'})
      }
    ,
    async deleteTask(task){
      await this.moveCursorTo(`//li[div/label[text()='${task}']]//label`);
      await this.click(`//li[div/label[text()='${task}']]//button`)
    },
    async checkActiveListTask(){
      const li = await this.grabTextFromAll('.todo-list li:not(.completed) label')
      console.log(li)
      await this.dontSeeElement(`.todo-list li.completed label`)

    },
    async checkCompletedListTask(){
      const li = await this.grabTextFromAll('.todo-list li.completed label')
      console.log(li)
      
    }

  });
} 
