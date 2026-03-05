import { test, expect } from '@playwright/test';
import path from 'path';
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

import  { chromium } from 'playwright-extra';
import stealth  from 'puppeteer-extra-plugin-stealth';
// const { chromium } = require('playwright-extra')
// const stealth = require('puppeteer-extra-plugin-stealth')()

// npx playwright test -g 'test' --debug       - запуск дебага
// npx playwright test --project=auth          - запуск проекта

chromium.use(stealth())

test('test', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  
  await page.goto('https://rutube.ru/');
  await page.getByRole('button', { name: 'Закрыть' }).click();
  await page.getByRole('button', { name: 'Ок', exact: true }).click();

  await page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('button', { name: 'войти с помощью Почта' }).click();
  await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('textbox', { name: 'Введите почту' }).click();
  await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('textbox', { name: 'Введите почту' }).fill(process.env.LOGIN!);
  await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('button', { name: 'Продолжить' }).click();
  await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').fill(process.env.PASSWORD!);
  await page.locator('iframe[title="Multipass"]').contentFrame().getByRole('button', { name: 'Войти', exact: true }).click();
  await page.locator('.svg-icon.svg-icon--IconClose.svg-icon--size.push-notification-popup-module__close > use').click();
  await page.getByRole('button', { name: 'Иконка канала channel56877604' }).click();
  await page.getByRole('link', { name: 'Иконка канала channel56877604' }).click();
  await page.getByRole('link', { name: 'Подписки' }).click();


  await page.context().storageState({ path: authFile });
});














