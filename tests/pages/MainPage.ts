import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly authorizationModalLocatort: Locator;
  private readonly switchToRegistrationModalButtonLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;

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
    this.headerAddButtonLocator = this.page.getByRole("button", {
      name: "Добавить",
    });
    this.headerNotificationsButtonLocator = this.page.getByRole("button", {
      name: "Уведомления",
    });
    this.headerLoginButtonLocator = this.page.getByRole("button", {
      name: "Вход и регистрация",
    });
    this.headerAddButtonPopupListLocator = this.page.locator(
      ".wdp-header-right-module__wrapper ul",
    );

    this.headerNotificationsPopupLocator = this.page.locator(
      ".wdp-notification-module__wrapper",
    );
    this.authorizationModalLocatort = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.switchToRegistrationModalButtonLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]')
      .getByRole("button", { name: "войти с помощью Почта" });
    this.menuButtonLocator = this.page.getByRole("button", {
      name: "Открыть меню навигации",
    });
    this.openMenuAriaLocator = this.page.locator(
      ".menu-content-module__menuOpen",
    );
    this.changeThemeButtonLocator = this.page.getByRole("button", {
      name: "Переключить на светлую тему",
    });
  }

  async open() {
    await this.page.goto("https://rutube.ru/");
  }

  async headerHasCorrectAriaSnaphsot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({
      name: "headerAriaSnapshot.yml",
    });
  }

  async categoriesTabsHasCorrectAriaSnaphsot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({
      name: "categgoriesTabsAriaSnapshot.yml",
    });
  }

  async menuHasCorrectAriaSnaphsot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({
      name: "menuAriaSnapshot.yml",
    });
  }

  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }

  async openNotificationPopup() {
    await this.headerNotificationsButtonLocator.click();
  }

  async openAuthorizationModal() {
    await this.headerLoginButtonLocator.click();
  }

  async switchToRegistrationModal() {
    await this.switchToRegistrationModalButtonLocator.click();
  }

  async addPopupListHasCorrectAriaSnapshot() {
    await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({
      name: "addButtonPopupList.yml",
    });
  }

  async notificationPopupHasCorrectAriaSnapshot() {
    await expect(this.headerNotificationsPopupLocator).toMatchAriaSnapshot({
      name: "notificationPopup.yml",
    });
  }

  async authorizationModalHasCorrectAriaSnapshot() {
    await expect(this.authorizationModalLocatort).toMatchAriaSnapshot({
      name: "authorizationModal.yml",
    });
  }

  async registrationModalHasCorrectAriaSnapshot() {
    await expect(this.authorizationModalLocatort).toMatchAriaSnapshot({
      name: "registrationModal.yml",
    });
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
      name: "fullMenuSnapshot.yml",
    });
  }

  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }

  async checkThemeAttributeValue(attributeValue: "light" | "dark") {
    await expect(this.page.locator("html")).toHaveAttribute(
      "data-themeid",
      attributeValue,
    );
  }
}
