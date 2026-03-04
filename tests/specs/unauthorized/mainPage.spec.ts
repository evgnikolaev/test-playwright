import { test, expect } from "../../fixtures/fixtures";
import { MainPage } from "../../pages/mainPage";

test("Проверка доступности элементов хедера", async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnaphsot();
});

test("Проверка доступности табов категорий", async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnaphsot();
});

test("Проверка доступности элементов меню", async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnaphsot();
});

test("Проверка доступности элементов списка добавления контента", async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов попапа уведомлений", async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopup();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов модального окна авторизации", async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов модального окна регистрации", async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.switchToRegistrationModal();
  await mainPage.registrationModalHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов раскрытого меню", async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});


test("переключение темы", async ({ mainPage }) => {
  mainPage.checkThemeAttributeValue("dark");
  await mainPage.changeThemeToWhite();
  mainPage.checkThemeAttributeValue("light");
});
