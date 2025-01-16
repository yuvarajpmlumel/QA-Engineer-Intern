const {test, expect} = require("@playwright/test")


test.beforeEach(async ({page})=>{
    await page.goto("https://omayo.blogspot.com/", { timeout: 50000 })
})

test.afterEach(async ({ page }) => {
    await page.close();
});

test("Accesing the blog and checking site url", async ({page})=>{
    await page.getByRole("link",{name: 'Blogs'}).first().hover()
    await page.getByText("SeleniumByArun").click()
    await expect(page).toHaveURL("https://selenium-by-arun.blogspot.com/")
})

test("Login with Username and password  ", async ({page})=>{
    const form =  page.locator('//*[@name="form1"]')
    await form.locator("//*[@type='text']").fill("admin")
    await form.locator("//*[@type='password']").pressSequentially("admin",{delay: 1000})
    await page.locator("//*[@name='form1']/button").click()
    console.log("Clicked button from login test case")
})

test("get Text from Preloaded Textbox", async ({ page }) => {
    const tb1 =  page.locator("//*[@id='textbox1']")
    console.log(await tb1.inputValue())
    await expect(tb1).toHaveValue("Selenium WebDriver")
})
test("check if button 2 is enabled and button 1 is disabled ", async ({ page }) => {
    const tb1 =  page.locator("//*[@id='but2']")
    await expect(tb1).toBeEnabled()
    
    const tb2 =  page.locator("//*[@id='but1']")
    await expect(tb2).toBeDisabled()
})

test("Search This Blog and check if the URL has the text", async ({ page }) => {
    const tb1 =  page.locator(".gsc-input").last()
    await tb1.fill("Germany")
    await page.locator(".gsc-search-button").last().click()
    expect(page.url()).toContain("Germany")
})
test("delayed dropdown button and Click Flipkart", async ({ page }) => {
    await page.locator(".dropbtn").click()
    
    const flipkartOption = page.locator('//*[@id="myDropdown"]/a[2]'); // Replace with the locator for Flipkart in the dropdown
    // await flipkartOption.waitFor(); // Ensure the dropdown is fully loaded
    await flipkartOption.click();

    const currentURL = page.url();
    expect(currentURL).toContain('flipkart.com');
})
test("Print the entire dropdown options and click doc1 ", async ({ page }) => {
    const dropdown = page.locator(".combobox")
    const options = await dropdown.locator("option").all()
    for (const option of options) {
        const text = await option.textContent(); 
        const value = await option.getAttribute('value'); 
        console.log(`Text: ${text}, Value: ${value}`);
      }
    await dropdown.selectOption({ label: 'doc 1' });  
    const selectedValue = await dropdown.inputValue();
    expect(selectedValue).toBe('def'); 
})
test("Read all rows and columns from a table", async ({ page }) => {
    const table = page.locator('#table1');
    const rows = await table.locator('tbody tr').all();
    console.log("Table Data:");
    for (let i = 0; i < rows.length; i++) {
      const cells = await rows[i].locator('td').allTextContents(); 
      console.log(`Row ${i + 1}: ${cells.join(', ')}`);
    }
})