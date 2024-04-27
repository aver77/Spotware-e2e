import { test as setup, expect } from "@playwright/test";
import TradePage from "pages/tradePage/tradePage.page";

const authFile = "playwright/.auth/user.json";

const LOGIN: string = process.env.LOGIN as string;
const PASSWORD: string = process.env.PASSWORD as string;

setup("login", async ({ page }) => {
    if (!LOGIN || !PASSWORD) {
        throw new Error(".env file error");
    }

    await page.goto("/");
    const TP = new TradePage(page);
    await TP.login(process.env.LOGIN as string, process.env.PASSWORD as string);
    await expect(TP.locators.ACCOUNT_CONTROL).toBeVisible();

    await page.context().storageState({ path: authFile });
});
