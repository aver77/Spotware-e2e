import { Page } from "@playwright/test";

class SharedTabPanel {
    constructor(readonly page: Page) {}

    /** Locators */
    public get locators() {
        const TAB_PANEL = this.page.locator("data-test-id=symbol-tab-panel");

        return {
            TAB_PANEL,
            TEXT_INPUT: TAB_PANEL.locator("data-test-id=text-input >> input"),
            WATCH_LISTS: TAB_PANEL.locator("data-test-id=watchlists"),
            SYMBOL: TAB_PANEL.locator("data-test-id=symbol")
        };
    }

    /** Actions */
    public async chooseMarket(marketName: string) {
        await this.locators.WATCH_LISTS.click();
        await this.locators.TEXT_INPUT.click();
        await this.locators.TEXT_INPUT.fill(marketName);
        await this.locators.SYMBOL.filter({ hasText: marketName }).click();
    }
}

export default SharedTabPanel;
