import { test, expect } from "../../fixtures/fixtures";
import { MainPage } from "../../pages/mainPage";

test("Проверка доступности элементов хедера неавторизованного пользователя", async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnaphsot();
});

test("Проверка доступности табов категорий неавторизованного пользователя", async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnaphsot();
});

test("Проверка доступности элементов меню неавторизованного пользователя", async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnaphsot();
});

test("Проверка доступности элементов списка добавления контента неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов попапа уведомлений неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopup();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов модального окна авторизации неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов модального окна регистрации неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.switchToRegistrationModal();
  await mainPage.registrationModalHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов раскрытого меню неавторизованного пользователя", async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});


test("переключение темы неавторизованного пользователя", async ({ mainPage }) => {
  mainPage.checkThemeAttributeValue("dark");
  await mainPage.changeThemeToWhite();
  mainPage.checkThemeAttributeValue("light");
});
