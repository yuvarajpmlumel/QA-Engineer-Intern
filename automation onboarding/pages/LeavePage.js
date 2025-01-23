
const { I } = inject();
module.exports =  {

    FromDate : "//label[text()='From Date']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
    ToDate : "//label[text()='To Date']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
    LeaveStatus : "//label[text()='Show Leave with Status']/ancestor::div[contains(@class, 'oxd-input-group')]//div[contains(@class, 'oxd-select-text-input')]", 
    TakenOption : "//span[text()='Taken']",
    searchButton : "//button[@type='submit']",
    searchResults : "//div[@class='oxd-table-card']",
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
        },
    async SelectTaken(){
        await I.click(this.LeaveStatus)
        await I.click(this.TakenOption)
    },
    async isResultsVisible(){
        await I.waitForElement(this.searchResults,5)
        await I.seeElement(this.searchResults)
    },
  }