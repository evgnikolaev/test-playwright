/*


https://stepik.org/lesson/1597867/step/1?unit=1619505


Аннотации

    Аннотации в Playwright позволяют добавлять метки, комментарии и условия к тестам. 
    Типы аннотаци:

        1. test.skip(). - Пропуск тестов

                test.skip('Пропускаем этот тест', async ({ page }) => {
                    // Тест не будет выполнен
                });


                Условный пропуск

                test('Пропустить в Firefox', async ({ browserName }) => {
                    test.skip(browserName === 'firefox', 'Ещё в разработке для Firefox');
                });






        2. test.fixme() - Пометка теста как неработающего
    

        3. test.slow()  - Замедленные тесты

                test.slow('Медленный тест', async ({ page }) => {
                    // Тайм-аут увеличен
                });





        4. test.only()   - Фокусировка тестов
        
                test.only('Этот тест будет выполнен', async ({ page }) => {
                    // Запускается только этот тест
                });





        5. test.describe()  - Группировка тестов


                Условное выполнение группы тестов
                Можно выполнять группу тестов только в определённой среде.


                        test.describe('Только для Chromium', () => {
                            test.skip(({ browserName }) => browserName !== 'chromium', 'Только для Chromium');

                            test('Тест для Chromium', async ({ page }) => {
                                // Выполняется только в Chromium
                            });
                        });









Теги для тестов


    Playwright поддерживает теги для фильтрации и управления выполнением тестов. 
    Теги добавляются в название теста или как дополнительный параметр.

    Добавление тегов:
    1. Через объект параметров:

            test('Тест с тегом @fast', {
                tag: '@fast',
            }, async ({ page }) => {
                // ...
            });

                  
    2. Прямо в названии:

            test('Тест с тегом @slow', async ({ page }) => {
                // ...
            });




    Фильтрация по тегам:
    

            1. npx playwright test --grep @fast                             - Запуск тестов с конкретным тегом

            2. npx playwright test --grep-invert @fast                      - Пропуск тестов с определённым тегом

            3. Запуск тестов с несколькими тегами:

                npx playwright test --grep "@fast|@slow"                    - Логическое ИЛИ

                npx playwright test --grep "(?=.*@fast)(?=.*@slow)"         - Логическое И









Аннотации

    Аннотации предоставляют больше контекста тестам. Они состоят из типа (type) и описания (description) и отображаются в отчётах.
    
    
    Добавление аннотаций:

        1. Для теста:

                test('Тест с аннотацией', {
                    annotation: {
                        type: 'issue',
                        description: 'https://github.com/microsoft/playwright/issues/123',
                    },
                }, async ({ page }) => {
                    // ...
                });





        2. Для группы:

                test.describe('Группа тестов с аннотацией', {
                    annotation: { 
                        type: 'category', 
                        description: 'UI Tests' 
                    },
                }, () => {
                    test('Тест внутри группы', async ({ page }) => {
                        // ...
                    });
                });




        3. Аннотация во время выполнения:
           Можно добавлять аннотации в процессе выполнения теста.
 

                test('Добавление аннотации в процессе', async ({ page, browser }) => {
                    test.info().annotations.push({
                        type: 'browser version',
                        description: browser.version(),
                    });
                });








Шаги в тестах



        test.step

            1. Улучшение читаемости отчётов
            При использовании test.step, действия внутри теста разделяются на этапы, и эти этапы отображаются в HTML-отчёте Playwright.

            2. Упрощение отладки
            Если тест падает, вы видите, на каком конкретно шаге это произошло.

            3. Структурирование сложных тестов
            Логически разбивать тесты на этапы легче, чем добавлять комментарии или вручную логировать события.

            4. Создание более точных логов
            В трейсах и логах Playwright шаги отображаются с дополнительной детализацией.




        пример

            test('Авторизация пользователя', async ({ page }) => {
                await test.step('Открыть страницу входа', async () => {
                    await page.goto('https://example.com/login');
                });

                await test.step('Заполнить поля авторизации', async () => {
                    await page.fill('#username', 'user123');
                    await page.fill('#password', 'password123');
                });

                await test.step('Отправить форму', async () => {
                    await page.click('#loginButton');
                });

                await test.step('Проверить, что пользователь авторизован', async () => {
                    const welcomeMessage = page.locator('#welcome');
                    await expect(welcomeMessage).toBeVisible();
                    await expect(welcomeMessage).toHaveText('Welcome, user123!');
                });
            });

*/