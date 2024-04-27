import { Page } from "@playwright/test";
import LoginDialog from "modules/tradeModule/components/loginDialog";
import OrderDialog from "modules/tradeModule/components/orderDialog";

class TradePage {
    orderDialog: OrderDialog;
    constructor(readonly page: Page) {
        this.orderDialog = new OrderDialog(page);
    }

    /** Locators */
    public get locators() {
        const HEADER = this.page.locator("data-test-id=active-chart-toolbar");

        return {
            HEADER,
            LOG_IN_BUTTON: this.page.locator("data-test-id=log-in >> button"),
            ACCOUNT_CONTROL: this.page.locator("data-test-id=account-control"),
            NEW_ORDER_BUTTON: HEADER.locator("data-test-id=new-order-button >> button")
        };
    }

    /** Actions */
    public async login(login: string, password: string) {
        await this.locators.LOG_IN_BUTTON.click();
        const LD = new LoginDialog(this.page);
        await LD.login(login, password);
    }

    public async makeNewOrder() {
        await this.locators.NEW_ORDER_BUTTON.click();
        const OD = new OrderDialog(this.page);
        await OD.placeOrder();
    }
}
export default TradePage;
