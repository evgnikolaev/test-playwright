/*


https://stepik.org/lesson/1598556/step/1?unit=1620188


Хуки


    - beforeEach    — Выполняется перед каждым тестом в группе или в файле.
    - afterEach     — Выполняется после каждого теста.
    - beforeAll     — Выполняется один раз перед началом выполнения всех тестов в группе или файле.
    - afterAll      — Выполняется один раз после завершения всех тестов в группе или файле.


    
    test.describe() - группировка тестов.
                      Хуки можно задавать для всей группы тестов, ограничивая их выполнение только этой группой. 
        





    Условное выполнение хуков

        Хуки можно использовать условно, например, в зависимости от типа браузера или других параметров.

                import { test } from '@playwright/test';

                test.beforeEach(async ({ browserName }) => {
                    if (browserName === 'firefox') {
                        console.log('Подготовка окружения для Firefox');
                    }
                });

                test('Тест в разных браузерах', async ({ page, browserName }) => {
                    console.log(`Тестирование в ${browserName}`);
                });





    Исключение выполнения хуков

        Если вам нужно пропустить выполнение хуков в определённых условиях, используйте аннотации, такие как test.skip() или test.fixme().

                test.beforeEach(async ({ page, isMobile }) => {
                    test.fixme(isMobile, 'Мобильная версия не поддерживается');
                    await page.goto('https://example.com');
                });






    Пример реального сценария

        Используем хуки для выполнения следующих задач:
        - beforeAll:  Открытие соединения с базой данных.
        - afterAll:   Закрытие соединения с базой данных.
        - beforeEach: Логин пользователя.
        - afterEach:  Логаут пользователя.


                    import { test } from '@playwright/test';

                    let dbConnection;

                    test.beforeAll(async () => {
                        console.log('Открытие соединения с базой данных');
                        dbConnection = await connectToDatabase();
                    });

                    test.afterAll(async () => {
                        console.log('Закрытие соединения с базой данных');
                        await dbConnection.close();
                    });

                    test.beforeEach(async ({ page }) => {
                        console.log('Логин пользователя');
                        await page.goto('https://example.com/login');
                        await page.fill('#username', 'user');
                        await page.fill('#password', 'password');
                        await page.click('button[type="submit"]');
                    });

                    test.afterEach(async ({ page }) => {
                        console.log('Логаут пользователя');
                        await page.click('button#logout');
                    });

                    test('Тестирование функциональности', async ({ page }) => {
                        console.log('Проверка страницы профиля');
                        await page.goto('https://example.com/profile');
                    });













    
*/