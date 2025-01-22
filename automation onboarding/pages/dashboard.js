const { I } = inject();
module.exports =  {

    TimesheetApprove : `//p[text()='(1) Timesheet to Approve']`,
    PendingSelf : `//p[text()='(1) Pending Self Review']`,
    CandidateToInterview : `//p[text()='(1) Candidate to Interview']`,
    PunchedOut : `//p[text()='Punched Out']`,
    LeaveOnNav : `//span[text()='Leave']`,
    async isTimesheetApproveVisible(){
        await I.seeElement(this.TimesheetApprove)
    },
    async isPendingSelfVisible(){
        await I.waitForElement(this.PendingSelf)
        await I.seeElement(this.PendingSelf)
        },
    async isCandidateToInterviewVisible(){
        await I.waitForElement(this.CandidateToInterview)
        await I.seeElement(this.CandidateToInterview)
        },
    async isPunchedOutVisible(){
        await I.waitForElement(this.PunchedOut)
        await I.seeElement(this.PunchedOut)
        },
    async toLeavePage(){
        await I.click(this.LeaveOnNav);
        // await I.waitForNavigation(); 
        }

  }