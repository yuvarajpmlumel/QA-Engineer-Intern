// in this file you can append custom step methods to 'I' object

module.exports = function() {

  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    async addTask(arr){
      console.log(arr)
      for(let x of arr){
        await this.fillField("//input[@type='text']",x);
        await this.pressKey("Enter");
        await this.see(x)
      }
    },
    async markTaskAsCompleted(task_no){
      for (let x of task_no){
        await this.checkOption(`.todo-list li:nth-child(${x}) .toggle`)
        await this.seeAttributesOnElements(`.todo-list li:nth-child(${x})`,{class : 'completed'})
        const textDecoration = await this.grabCssPropertyFrom(
          `.todo-list li:nth-child(${x}).completed label`,
          'text-decoration'
        );
        // pause();
        console.log('Text Decoration:', textDecoration);
        const text = await this.grabCssPropertyFrom(`.todo-list li:nth-child(${x}).completed label`,'text-decoration')
        console.log("text deco:", text)
        // await this.seeCssPropertiesOnElements(`.todo-list li:nth-child(${x}).completed label`, { 'text-decoration': 'line-through' });
      }
    },
    async checkItemsLeft(n){
      n==1 ? this.see("1 item left!"):
        this.see(`${n} items left!`)
      
    },
    async deleteTask(task_no){
      await this.moveCursorTo(`.todo-list li:nth-child(${task_no})`);
      await this.click(`.todo-list li:nth-child(${task_no}) .destroy`)
    },
    async checkActiveListTask(){
      const li = await this.grabTextFromAll('.todo-list li:not(.completed) label')
      console.log(li)
      for (let x=1;x<=li.length;x++){
        const liClass = await this.grabAttributeFrom(`.todo-list li:nth-child(${x})`, 'class');
        console.log('Class Attribute:', liClass);
        // await this.seeAttributesOnElements(`.todo-list li:nth-child(${x})`,{class : ""})
        await this.dontSeeElement(`.todo-list li.completed label`)
      }
      // const comp = await this.grabAttributeFromAll(`.todo-list li.completed label`, 'class');
      // console.log('Completed Tasks on Active Tab:', comp)

    },
    async checkCompletedListTask(){
      const li = await this.grabTextFromAll('.todo-list li.completed label')
      console.log(li)
      for (let x=1;x<=li.length;x++){
        await this.seeAttributesOnElements(`.todo-list li:nth-child(${x})`,{class : 'completed'})
      }
    }

  });
} 
