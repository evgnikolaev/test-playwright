import { expect, Locator, type Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    try {
      await this.page
        .getByRole("button", { name: "Закрыть" })
        .waitFor({ state: "visible", timeout: 2000 });
      await this.page.getByRole("button", { name: "Закрыть" }).click();

      await this.page
        .getByRole("button", { name: "Ок", exact: true })
        .waitFor({ state: "visible", timeout: 2000 });
      await this.page.getByRole("button", { name: "Ок", exact: true }).click();
    } catch (e) {
      console.log("Попап не появился, пропускаем");
    }
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }

  protected async checkLayoutByScreenshot(
    locator: Locator,
    screenshotName: string,
  ) {
    await expect(locator).toHaveScreenshot(screenshotName);
  }

  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const header = document.querySelector(selector);
      if (header) {
        (header as HTMLElement).style.display = "none";
      }
    }, selector);
  }
}
