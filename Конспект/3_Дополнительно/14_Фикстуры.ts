/*


https://stepik.org/lesson/1597870/step/1?unit=1619508

Фикстуры в Playwright — это механизм подготовки окружения для каждого теста. 

Встроенные фикстуры
        - page: изолированная страница браузера для теста.
        - context: изолированный контекст браузера.
        - browser: экземпляр браузера, общий для всех тестов.
        - browserName: строка, определяющая название браузера (chromium, firefox, webkit).
        - request: изолированный клиент для выполнения API-запросов.





Создание пользовательских фикстур
        Создаются они с помощью метода test.extend()


                import { test as base } from '@playwright/test';

                const test = base.extend  <{customFixture: string;}>    ({ customFixture: async ({}, use) => {
                        // Настройка
                        await use('Custom Value');
                        // Очистка
                        },
                });

                test('test with custom fixture', async ({ customFixture }) => {
                        console.log(customFixture); // Вывод: "Custom Value"
                });








Типы фикстур
        1. Тестовые фикстуры (scope: 'test'): создаются и очищаются для каждого теста.
        2. Фикстуры на уровне воркера (scope: 'worker'): создаются один раз для воркера, что позволяет переиспользовать окружение между тестами.
           Пример фикстуры на уровне воркера:

                import { test as base } from '@playwright/test';

                export const test = base.extend<{}, { account: Account }>({
                        account: [async ({ browser }, use, workerInfo) => {
                                const username = `user${workerInfo.workerIndex}`;
                                const password = 'password123';
                                await use({ username, password });
                        }, { scope: 'worker' }]
                });  







Автоматические фикстуры
Автоматические фикстуры настраиваются и очищаются для каждого теста или воркера без явного указания их в тесте.

                export const test = base.extend<{
                        autoLog: void;
                }>({
                        autoLog: [async ({}, use, testInfo) => {
                                console.log('Start test:', testInfo.title);
                                await use();
                                console.log('End test:', testInfo.title);
                        }, { auto: true }],
                });






                  
Переопределение фикстур
                const test = base.extend({
                        page: async ({ page, baseURL }, use) => {
                                await page.goto(baseURL);
                                await use(page);
                        },
                });






Порядок выполнения фикстур
        1. Автоматические воркер-фикстуры.
        2. Автоматические тестовые фикстуры.
        3. Пользовательские фикстуры в порядке их зависимости.

        Пример выполнения:
                1. autoWorkerFixture -> workerFixture -> beforeAll
                2. autoTestFixture -> page -> test -> afterEach
                3. afterAll -> teardown worker fixtures



                

*/