
const { I } = inject();
module.exports =  {

    FromDate : "//label[text()='From Date']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
    ToDate : "//label[text()='From Date']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
    searchButton : "//button[@type='submit']",

    async enterFromDate(fromDate){
        await I.waitForElement(this.FromDate,60)
        await I.fillField(this.FromDate,fromDate)
    },
    async enterToDate(toDate){
        await I.waitForElement(this.ToDate,60)
        await I.fillField(this.ToDate,toDate)
    },
    async clickSubmit(){
        await I.click(this.searchButton)
        }

  }