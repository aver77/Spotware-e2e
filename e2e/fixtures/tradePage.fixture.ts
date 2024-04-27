import { test as base } from "@playwright/test";
import TradePage from "pages/tradePage/tradePage.page";

export const test = base.extend<{
    tradePage: TradePage;
}>({
    tradePage: async ({ page }, use) => {
        const tradePage = new TradePage(page);
        await tradePage.page.goto("/");
        await use(tradePage);
    }
});
