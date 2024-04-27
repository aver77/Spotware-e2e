import { Page } from "@playwright/test";

class TradePage {
    constructor(readonly page: Page) {}

    /** Locators */
    public get locators() {
        return {
            LOG_IN_BUTTON: this.page.getByTestId("log-in >> button")
        };
    }
}
export default TradePage;
