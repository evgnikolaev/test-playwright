/*


https://stepik.org/lesson/1607875/step/1?unit=1629617

Mock API в Playwright




Мокирование API-запросов
    Мокирование позволяет заменить реальные API-запросы на кастомные ответы. 
    Это полезно для тестирования сценариев, когда реальный API недоступен или его поведение нужно контролировать.


            test("mocks a fruit and doesn't call api", async ({ page }) => {
            await page.route('* /** /api/v1/fruits', async route => {
                const json = [{ name: 'Strawberry', id: 21 }];
                await route.fulfill({ json });
            });

            await page.goto('https://demo.playwright.dev/api-mocking');
            await expect(page.getByText('Strawberry')).toBeVisible();
            });








Модификация API-ответов
    Иногда нужно не полностью мокировать запрос, а изменить его ответ. 
    Это полезно для тестирования сценариев, когда требуется модифицировать данные, полученные от API.


            test('gets the json from api and adds a new fruit', async ({ page }) => {
            await page.route('* /** /api/v1/fruits', async route => {
                const response = await route.fetch();                       // Выполняем реальный запрос
                const json = await response.json();                         // Получаем JSON-ответ
                json.push({ name: 'Loquat', id: 100 });                     // Добавляем новый элемент
                await route.fulfill({ response, json });                    // Возвращаем модифицированный ответ
            });

            await page.goto('https://demo.playwright.dev/api-mocking');
            await expect(page.getByText('Loquat', { exact: true })).toBeVisible();
            });









Мокирование с использованием HAR-файлов
    HAR-файл (HTTP Archive) — это файл, содержащий запись всех сетевых запросов, сделанных при загрузке страницы. 
    Playwright позволяет использовать HAR-файлы для мокирования запросов.


        Этапы работы с HAR-файлами:
            1. Запись HAR-файла:
            Используйте метод page.routeFromHAR() или browserContext.routeFromHAR().
            Укажите путь к HAR-файлу и опцию update: true, чтобы записать реальные запросы.

                    test('records or updates the HAR file', async ({ page }) => {
                    await page.routeFromHAR('./hars/fruit.har', {
                        url: '* /** /api/v1/fruits',
                        update: true,
                    });
                    await page.goto('https://demo.playwright.dev/api-mocking');
                    await expect(page.getByText('Strawberry')).toBeVisible();
                    });

                    
            2. Модификация HAR-файла:
            HAR-файл можно редактировать вручную, изменяя JSON-данные.

            3. Воспроизведение из HAR-файла:
            Используйте HAR-файл для мокирования запросов в тестах.

                    test('gets the json from HAR and checks the new fruit has been added', async ({ page }) => {
                    await page.routeFromHAR('./hars/fruit.har', {
                        url: '* /** /api/v1/fruits',
                        update: false,
                    });
                    await page.goto('https://demo.playwright.dev/api-mocking');
                    await expect(page.getByText('Playwright', { exact: true })).toBeVisible();
                    });





                    

Мокирование WebSocket
    Playwright также позволяет мокировать WebSocket-соединения. 
    Это полезно для тестирования приложений, которые активно используют WebSocket.


                await page.routeWebSocket('wss://example.com/ws', ws => {
                ws.onMessage(message => {
                    if (message === 'request')
                    ws.send('response');                    // Отправляем мокированный ответ
                });
                });










Запись HAR-файлов через CLI

        npx playwright open --save-har=example.har --save-har-glob="** /api/**" https://example.com

                    
            Опции:
                --save-har          : Указывает имя HAR-файла.
                --save-har-glob     : Фильтрует запросы для записи (например, только API-запросы).


*/