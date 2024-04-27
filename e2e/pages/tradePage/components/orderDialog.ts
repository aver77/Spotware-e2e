import { Page } from "@playwright/test";
import SharedDialog from "shared/components/sharedDialog";
import SharedTabPanel from "shared/components/sharedTabPanel";
import { DEFAULT_MARKET } from "shared/constants";
class OrderDialog extends SharedDialog {
    constructor(readonly page: Page) {
        super(page);
    }

    /** Locators */
    public get locators() {
        const sharedLocators = super.locators;

        return {
            ...sharedLocators,
            MARKET_ORDER: this.page.locator("data-test-id=market-order"),
            TRADE_SELECT: this.page.locator("data-test-id=trade-dialog-symbol-select"),
            PLACE_ORDER: this.page.locator("data-test-id=new-position-submit-control >> button"),
            THANK_YOU_FORM: this.page.locator("data-test-id=thank-you-form"),
            CLOSE_THANK_YOU_FORM: this.page.locator("data-test-id=ok-button")
        };
    }

    /** Actions */
    public async placeOrder() {
        await this.locators.MARKET_ORDER.click();
        await this.locators.TRADE_SELECT.click();

        const TP = new SharedTabPanel(this.page);
        await TP.chooseMarket(DEFAULT_MARKET);

        await this.locators.PLACE_ORDER.click();
    }

    public async closeThankYouForm() {
        await this.locators.CLOSE_THANK_YOU_FORM.click();
    }
}

export default OrderDialog;
