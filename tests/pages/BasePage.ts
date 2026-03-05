import { type Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    try {
      await this.page.getByRole("button", { name: "Закрыть" }).waitFor({ state: "visible", timeout: 2000 });
      await this.page.getByRole("button", { name: "Закрыть" }).click();

      await this.page.getByRole("button", { name: "Ок", exact: true }).waitFor({ state: "visible", timeout: 2000 });
      await this.page.getByRole("button", { name: "Ок", exact: true }).click();

    } catch (e) {
      console.log("Попап не появился, пропускаем");
    }
  }
}
