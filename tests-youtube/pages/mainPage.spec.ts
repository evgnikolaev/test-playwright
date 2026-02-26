//import { test, expect, Page, Locator } from '@playwright/test';
import { test, expect } from '../fixtures/MainPage';
import { MainPage } from '../models/MainPage';


test.describe('Тесты главной страницы',()=>{

      test('Проверка Отображения элементов навигации хедера', async ({ mainPage }) => {
          await mainPage.checkElementsVisability();
      });


      test('Проверка Названия элементов навигации хедера', async ({ mainPage }) => {
          await mainPage.checkElementsText();
      });


      test('Проверка Атрибутов href элементов навигации хедера', async ({ mainPage }) => {
          await mainPage.checkElementsHrefAttribute();
      });


      test('Проверка Переключения light mode', async ({ mainPage }) => {
        await test.step('Нажатие на иконку light mode', async ()=> {
          await mainPage.clickSwitchLightModeIcon();
          await mainPage.checkDataThemeAttributeValue();
        });
      });


      test(`Проверка стилей со светлой темой`, async ({ mainPage })=>{
          await mainPage.setLightMode();
          await mainPage.checkLayoutWithLightMode();
      });


      test(`Проверка стилей с темной темой`, async ({ mainPage })=>{
          await mainPage.setDarkMode();
          await mainPage.checkLayoutWithDarkMode();
      });
   
});
