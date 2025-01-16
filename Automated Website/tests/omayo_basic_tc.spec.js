const { test, expect } = require("@playwright/test");

test.describe("Omayo Blog Tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://omayo.blogspot.com/");
    });

    test("Test Title", async ({ page }) => {
        await expect(page).toHaveTitle("omayo (QAFox.com)");
    });

    test("Test URL", async ({ page }) => {
        await expect(page).toHaveURL("https://omayo.blogspot.com/")
    })

    test("Redirect to Blogs page", async ({ page }) => {
        await page.locator("//a[@id='selenium143']").click()
        console.log("Clicked the link")
    })

    test("Dropdown button", async ({ page }) => {
        const dropdown =  page.locator(".combobox")
        await dropdown.click()
        await dropdown.selectOption("jkl")
    })

    test("Text Box1", async ({ page }) => {
        const tb1 =  page.locator("//*[@id='textbox1']")
        await tb1.clear()
        await tb1.fill("123")
        await expect(tb1).toHaveValue("123")
    })

    test("Clicking button", async ({ page }) => {
        const btn =  page.getByRole("button",{name: "Button2"})
        await btn.click()
        console.log("Clicked button")
    })

    test("Content Visible", async ({ page }) => {
        const btn =  page.locator("#post-body-9023929218208337252")
        await expect(btn).toBeVisible()
    })
    test("Check Content", async ({ page }) => {
        const btn =  page.locator("#post-body-9023929218208337252")
        await expect(btn).toHaveText("This is a sample text in the Page One.")
    }) 
    test("Accessing Radio Button", async ({ page }) => {
        const btn =  page.locator('//*[@id="radio1"]')
        await btn.click()
        await expect(btn).toBeChecked()
    })
    test("Accessing Iframe", async ({ page }) => {
        const iframeLocator = page.frameLocator('//*[@id="iframe1"]');
        await iframeLocator.locator('//*[@id="HTML7"]/div[1]/table/tbody/tr/td[1]/ol/li[4]/b/a').click();
    })
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
});
