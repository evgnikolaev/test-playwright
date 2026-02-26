/*


https://stepik.org/lesson/1597872/step/1?unit=1619510


Параметризация на уровне тестов

        test.describe("Тесты двух наборов данных", () => {
            test.beforeEach(async ({ page }) => {
                //предусловие - будет выполнятся перед каждым тестом из обоих наборов
                //сюда можно вынести код, который дублируется внутри forEach 
            });

            [1, 2, 3].forEach(({ name, expected }) => {
                //тесты для первого набора
            });

            [a, b, c].forEach(({ name, expected }) => {
                //тесты для второго набора
            });
        });





Генерация тестов из CSV


    Пример CSV файла
            test_case,some_value,some_other_value
            value 1,value 11,foobar1
            value 2,value 22,foobar21
            value 3,value 33,foobar321

    Чтение данных из CSV и генерация тестов
            import fs from 'fs';
            import path from 'path';
            import { parse } from 'csv-parse/sync';
            import { test } from '@playwright/test';

            const records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {
                columns: true,
                skip_empty_lines: true,
            });

            records.forEach(record => {
                test(`Тест: ${record.test_case}`, async ({ page }) => {
                    console.log(record.test_case, record.some_value, record.some_other_value);
                });
            });













Параметризация на уровне проектов   

    Определение параметров проекта
    Можно задавать параметры проекта через файл конфигурации playwright.config.ts:

                import { defineConfig } from '@playwright/test';

                export default defineConfig({
                projects: [
                    {
                    name: 'Alice',
                    use: { person: 'Alice' },
                    },
                    {
                    name: 'Bob',
                    use: { person: 'Bob' },
                    },
                ]
                });


    Использование параметров проекта
    Параметры можно использовать в тестах через расширение base.extend():

                import { test as base } from '@playwright/test';

                export const test = base.extend({
                person: ['John', { option: true }],
                });

                test('Тестирование с параметром', async ({ page, person }) => {
                await page.goto(`/index.html`);
                await expect(page.locator('#node')).toContainText(person);
                });








Передача переменных окружения

            test(`Пример теста`, async ({ page }) => {
                await page.getByLabel('User Name').fill(process.env.USER_NAME);
                await page.getByLabel('Password').fill(process.env.PASSWORD);
            });
                            
            Выполнение теста с передачей переменных окружения:
            USER_NAME=me PASSWORD=secret npx playwright test





*/