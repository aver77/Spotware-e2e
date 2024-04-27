import { Page } from "@playwright/test";

class PositionTable {
    constructor(readonly page: Page) {}

    /** Locators */
    public get locators() {
        const TABLE_PRESENCE = this.page.locator("data-test-id=table-context");

        return {
            TABLE_PRESENCE,
            TABLE_ROW: TABLE_PRESENCE.locator("data-test-id=table-row-aggregated")
        };
    }
}

export default PositionTable;
