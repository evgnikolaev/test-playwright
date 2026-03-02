import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole("banner");
    this.categoriesTabsLocator = this.page
      .locator("section")
      .filter({
        hasText:
          "ГлавнаяГлавнаяФильмыФильмыСериалыСериалыТелешоуТелешоуСпортСпортБлогерыБлогерыМу",
      })
      .nth(1);

    this.menuLocator = this.page.getByLabel("Облегченная панель навигации");
  }

  async open() {
    await this.page.goto("https://rutube.ru/");
  }

  async headerHasCorrectAriaSnaphsot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }

  async categoriesTabsHasCorrectAriaSnaphsot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot();
  }

  async menuHasCorrectAriaSnaphsot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
}
