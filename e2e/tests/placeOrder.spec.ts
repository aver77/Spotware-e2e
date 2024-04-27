import { test } from "e2e/fixtures/tradePage.fixture";
import { expect } from "@playwright/test";
import { DEFAULT_MARKET } from "shared/constants";

test(`Should place order on ${DEFAULT_MARKET}`, async ({ tradePage }) => {
    await test.step("New order placement", async () => {
        await tradePage.makeNewOrder();
        await expect(tradePage.orderDialog.locators.THANK_YOU_FORM).toBeVisible();
        await tradePage.orderDialog.closeThankYouForm();
    });
});
