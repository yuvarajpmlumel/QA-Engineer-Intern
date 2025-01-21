const { I } = inject();
module.exports =  {

    loginText : `//h5[text()='Login']`,
    inputUsername : `//input[@name='username']`,
    inputPassword : `//input[@type='password']`,
    buttonLogin : `//button[@type='submit']`,
    
    async TextLogin(){
    await I.seeElement(this.loginText)
    },
    async enterUsername(username) {
      await I.fillField(this.inputUsername, username);
    },
  
    async enterPassword(password) {
      await I.fillField(this.inputPassword, password);
    },
  
    async clickLogin() {
      await I.click(this.buttonLogin);
    }
  }
  
// //   export default new LoginPage();
// module.exports = LoginPage;   
