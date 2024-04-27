import { Page } from "@playwright/test";
import SharedDialog from "shared/components/sharedDialog";

class LoginDialog extends SharedDialog {
    constructor(readonly page: Page) {
        super(page);
    }

    /** Locators */
    public get locators() {
        const sharedLocators = super.locators;

        return {
            ...sharedLocators,
            LOGIN_INPUT: this.page.locator("data-test-id=email >> input"),
            PASSWORD_INPUT: this.page.locator("data-test-id=password >> input"),
            LOG_IN_TAB: this.page.locator("data-test-id=signin-tab"),
            SING_UP_TAB: this.page.locator("data-test-id=signup-tab"),
            SUBMIT_BUTTON: this.page.locator("data-test-id=submit >> button")
        };
    }

    /** Actions */
    public async inputLogin(login: string) {
        await this.locators.LOGIN_INPUT.click();
        await this.locators.LOGIN_INPUT.fill(login);
    }

    public async inputPassword(password: string) {
        await this.locators.PASSWORD_INPUT.click();
        await this.locators.PASSWORD_INPUT.fill(password);
    }

    public async login(login: string, password: string) {
        await this.locators.LOG_IN_TAB.click();
        await this.inputLogin(login);
        await this.inputPassword(password);
        await this.locators.SUBMIT_BUTTON.click();
    }
}

export default LoginDialog;
