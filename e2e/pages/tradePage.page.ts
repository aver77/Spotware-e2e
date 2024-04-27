import { Page } from "@playwright/test";
import LoginDialog from "modules/tradeModule/components/loginDialog";

class TradePage {
    constructor(readonly page: Page) {}

    /** Locators */
    public get locators() {
        return {
            LOG_IN_BUTTON: this.page.getByTestId("log-in >> button"),
            ACCOUNT_CONTROL: this.page.getByTestId("account-control")
        };
    }

    /** Actions */
    public async login(login: string, password: string) {
        await this.locators.LOG_IN_BUTTON.click();
        const LD = new LoginDialog(this.page);
        await LD.login(login, password);
    }
}
export default TradePage;
