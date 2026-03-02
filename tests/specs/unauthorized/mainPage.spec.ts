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
