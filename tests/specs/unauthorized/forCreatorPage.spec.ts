import test from "@playwright/test";
import { ForCreatorPage } from "../../pages/ForCreatorsPage";

ForCreatorPage.testsParams.forEach(({ url, screenshotName, name }) => {
  test(`Проверка лейаута таба - ${name}`, async ({ page }) => {
    const forCreatorsPage = new ForCreatorPage(page);
    await forCreatorsPage.open(url);
    await forCreatorsPage.pageHasCorectLayout(screenshotName);
  });
});
