import test from "@playwright/test";
import { MainPage } from "../../pages/mainPage";

test("Открытие глаыной страницы", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});
