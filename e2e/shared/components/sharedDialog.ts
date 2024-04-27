import { Page } from "@playwright/test";

class SharedDialog {
    constructor(readonly page: Page) {}

    /** Locators */
    public get locators() {
        return {
            DIALOG_PRESENCE: this.page.locator("data-test-id=dialog"),
            CLOSE_DIALOG: this.page.locator("data-test-id=dialog-header-close")
        };
    }

    /** Actions */
    public async closeDialog() {
        await this.locators.CLOSE_DIALOG.click();
    }
}

export default SharedDialog;
