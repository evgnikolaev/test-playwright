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
  private readonly headerUserLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

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
    this.headerUserLogoLocator = this.page.getByRole("button", {
      name: "Иконка канала channel56877604",
    });
    this.headerUserMenuLocator = this.page.getByText(
      "channel56877604ru****@yandex.ruДобавьте номер телефонаПрофильМой каналСтудия",
    );
  }

  //actions

  async open() {
    await this.page.goto("https://rutube.ru/");
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

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }

  async openHeaderUserMenu() {
    await this.headerUserLogoLocator.click();
  }

  //assertions

  async headerHasCorrectAriaSnaphsot() {
    await this.checkAriaSnapshot(this.headerLocator, "headerAriaSnapshot.yml");
  }

  async categoriesTabsHasCorrectAriaSnaphsot() {
    await this.checkAriaSnapshot(
      this.categoriesTabsLocator,
      "categgoriesTabsAriaSnapshot.yml",
    );
  }

  async menuHasCorrectAriaSnaphsot() {
    await this.checkAriaSnapshot(this.menuLocator, "menuAriaSnapshot.yml");
  }

  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerAddButtonPopupListLocator,
      "addButtonPopupList.yml",
    );
  }

  async notificationPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerNotificationsPopupLocator,
      "notificationPopup.yml",
    );
  }

  async authorizationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.authorizationModalLocatort,
      "authorizationModal.yml",
    );
  }

  async registrationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.authorizationModalLocatort,
      "registrationModal.yml",
    );
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.openMenuAriaLocator,
      "fullMenuSnapshot.yml",
    );
  }

  async headerUserMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerUserMenuLocator,
      "headerUserMenuSnapshot.yml",
    );
  }

  async checkThemeAttributeValue(attributeValue: "light" | "dark") {
    await expect(this.page.locator("html")).toHaveAttribute(
      "data-themeid",
      attributeValue,
    );
  }
}
