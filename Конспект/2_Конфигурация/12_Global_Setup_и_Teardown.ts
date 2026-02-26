/*


https://stepik.org/lesson/1597871/step/1?unit=1619509


Global Setup and Teardown в Playwright

        Существует два подхода к их реализации:
        - Использование глобальных файлов globalSetup и globalTeardown
        - Использование проектных зависимостей (Project Dependencies) - рекомендуемый подход









Использование проектных зависимостей

        Проектные зависимости позволяют определить проекты, которые должны выполняться до других проектов. 
        Это удобно для глобальной настройки, например, создания базы данных или выполнения предварительных операций.


Настройка:

        1. Добавление проекта для настройки
        Создайте проект с именем setup db и настройте его для выполнения файла global.setup.ts:

                        playwright.config.ts
                        import { defineConfig } from '@playwright/test';

                        export default defineConfig({
                                testDir: './tests',
                                projects: [
                                {
                                        name: 'setup db',
                                        testMatch: /global\.setup\.ts/,
                                },
                                ],
                        });





        2. Добавление зависимости для других проектов
        Укажите, что проект, например, chromium with db зависит от setup db:

                        projects: [
                        {
                                name: 'setup db',
                                testMatch: /global\.setup\.ts/,
                        },
                        {
                                name: 'chromium with db',
                                use: { ...devices['Desktop Chrome'] },
                                dependencies: ['setup db'],
                        },
                        ];




        3. Создание файла глобальной настройки
        Файл tests/global.setup.ts должен содержать код настройки (например, инициализация базы данных):

                        import { test as setup } from '@playwright/test';

                        setup('create new database', async () => {
                                console.log('creating new database...');
                                // Код для инициализации базы данных
                        });





        4. Teardown (очистка настроек)
        Вы можете добавить проект для выполнения действий после тестов:

                        playwright.config.ts
                        projects: [
                        {
                                name: 'setup db',
                                testMatch: /global\.setup\.ts/,
                                teardown: 'cleanup db',
                        },
                        {
                                name: 'cleanup db',
                                testMatch: /global\.teardown\.ts/,
                        },
                        ];

















Использование globalSetup и globalTeardown

        Вы можете указать глобальные файлы настройки и завершения в конфигурации Playwright:

                        playwright.config.ts
                        import { defineConfig } from '@playwright/test';

                        export default defineConfig({
                                globalSetup: require.resolve('./global-setup'),
                                globalTeardown: require.resolve('./global-teardown'),
                        });

                        


        Пример globalSetup:
        Файл global-setup.ts может включать авторизацию пользователя и сохранение состояния:

                        import { chromium, type FullConfig } from '@playwright/test';

                        async function globalSetup(config: FullConfig) {
                                const { baseURL, storageState } = config.projects[0].use;
                                const browser = await chromium.launch();
                                const page = await browser.newPage();

                                await page.goto(baseURL!);
                                await page.getByLabel('User Name').fill('user');
                                await page.getByLabel('Password').fill('password');
                                await page.getByText('Sign in').click();
                                await page.context().storageState({ path: storageState as string });
                                await browser.close();
                        }

                        export default globalSetup;



        Укажите baseURL и storageState в конфигурации:

                        playwright.config.ts
                        export default defineConfig({
                                globalSetup: require.resolve('./global-setup'),
                                use: {
                                        baseURL: 'http://localhost:3000/',
                                        storageState: 'state.json',
                                },
                        });     



        Тесты будут запускаться с сохраненным состоянием:

                import { test } from '@playwright/test';

                test('authenticated test', async ({ page }) => {
                        await page.goto('/');
                        // Вы уже авторизованы!
                });



        Вы можете передавать данные из globalSetup в тесты через process.env:

                global-setup.ts
                process.env.FOO = 'value';
                process.env.BAR = JSON.stringify({ key: 'value' });

               
                
        Доступ к этим данным в тестах:

                test('use environment variables', async () => {
                        const foo = process.env.FOO; // 'value'
                        const bar = JSON.parse(process.env.BAR!); // { key: 'value' }
                });







        Захват трейсинга для globalSetup
        В случае ошибок при выполнении глобальной настройки вы можете записывать трейсинг:

                global-setup.ts
                import { chromium, type FullConfig } from '@playwright/test';

                async function globalSetup(config: FullConfig) {
                        const browser = await chromium.launch();
                        const context = await browser.newContext();
                        const page = await context.newPage();

                        try {
                                await context.tracing.start({ screenshots: true, snapshots: true });
                                await page.goto('http://example.com');
                                // Код настройки
                                await context.tracing.stop({ path: './setup-trace.zip' });
                        } catch (error) {
                                await context.tracing.stop({ path: './failed-setup-trace.zip' });
                                throw error;
                        } finally {
                                await browser.close();
                        }
                }

                export default globalSetup;



                
*/