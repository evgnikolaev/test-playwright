/*


https://stepik.org/lesson/1597866/step/1?unit=1619504


Конфигурация use в Playwright
playwright.config.ts.









Конфигурационные области
Настройки Playwright могут быть заданы на глобальном уровне, для отдельного проекта или конкретного теста.

                1. Глобальные настройки:

                        export default defineConfig({
                                use: { locale: 'en-GB' },
                        });

                                

                        
                2. Проектные настройки:

                        export default defineConfig({
                                projects: [
                                        {
                                                name: 'chromium',
                                                use: { locale: 'de-DE' },
                                        },
                                ],
                        });

                              
                        

                3. Настройки для конкретного теста:

                        test.use({ locale: 'fr-FR' });

                                












Базовые опции

        baseURL	        Базовый URL, используемый во всех страницах контекста.
        storageState	Загрузка состояния хранилища для контекста. Полезно для быстрой авторизации.



Пример

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
                use: {
                        // Базовый URL для навигации (например, `page.goto('/')`).
                        baseURL: 'http://127.0.0.1:3000',

                        // Загрузка состояния хранилища (например, для авторизации).
                        storageState: 'state.json',
                },
        });











Опции эмуляции

        colorScheme	        Эмуляция предпочтений цветовой схемы (light или dark).
        geolocation	        Геолокация контекста (широта и долгота).
        locale	                Локаль пользователя, например, en-GB или de-DE.
        permissions	        Разрешения для браузера, например, доступ к геолокации.
        timezoneId	        Часовой пояс контекста, например, Europe/Paris.
        viewport	        Размер окна браузера.



Пример

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
                use: {
                        colorScheme: 'dark',                                            // Эмуляция тёмной темы.
                        geolocation: { longitude: 12.492507, latitude: 41.889938 },     // Геолокация.
                        locale: 'en-GB',                                                // Локаль пользователя.
                        permissions: ['geolocation'],                                   // Разрешения для браузера.
                        timezoneId: 'Europe/Paris',                                     // Часовой пояс.
                        viewport: { width: 1280, height: 720 },                         // Размер окна браузера.
                },
        });



        





Сетевые опции

        acceptDownloads	        Автоматическая загрузка вложений (по умолчанию true).
        extraHTTPHeaders	Дополнительные HTTP-заголовки.
        httpCredentials	        Учетные данные для HTTP-аутентификации.
        ignoreHTTPSErrors	Игнорирование ошибок HTTPS-сертификатов.
        offline	                Эмуляция отключения сети.
        proxy	                Настройки прокси для всех страниц.


Пример

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
                use: {
                        acceptDownloads: true,                                          // Автоматическая загрузка файлов.
                        extraHTTPHeaders: { 'X-My-Header': 'value' },                   // Дополнительные HTTP-заголовки.
                        httpCredentials: { username: 'user', password: 'pass' },        // HTTP-аутентификация.
                        ignoreHTTPSErrors: true,                                        // Игнорировать ошибки HTTPS.
                        ffline: false,                                                  // Эмуляция работы офлайн.
                        proxy: {
                                server: 'http://myproxy.com:3128',
                                bypass: 'localhost',
                        }, // Прокси-настройки.
                },
        });





    
        

Опции записи (скриншоты, видео, трассировка)

        screenshot	Настройки скриншотов (off, on, only-on-failure).
        trace	        Трассировка выполнения теста (off, on, retain-on-failure, on-first-retry).
        video	        Настройки записи видео (off, on, retain-on-failure, on-first-retry).



Пример

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
                use: {
                        screenshot: 'only-on-failure',          // Скриншот только при сбое.
                        trace: 'on-first-retry',                // Трассировка при первой попытке перезапуска.
                        video: 'on-first-retry',                // Запись видео при первой попытке перезапуска.
                },
        });     












Другие опции


        actionTimeout	        Тайм-аут для каждого действия (в миллисекундах).
        browserName	        Название браузера (chromium, firefox, webkit).
        bypassCSP	        Игнорирование Content-Security-Policy.
        channel	                Канал браузера (chrome, msedge, и т.д.).
        headless	        Запуск браузера в режиме без интерфейса.
        testIdAttribute	        Атрибут для поиска элементов.



Пример

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
                use: {
                        actionTimeout: 0,               // Тайм-аут для каждого действия (0 = без тайм-аута).
                        browserName: 'chromium',        // Браузер для выполнения тестов.
                        bypassCSP: true,                // Игнорировать Content-Security-Policy.
                        channel: 'chrome',              // Канал браузера (например, "chrome-beta").
                        headless: false,                // Запуск браузера в режиме с интерфейсом.
                        testIdAttribute: 'pw-test-id',  // Пользовательский атрибут для локаторов.
                },
        });



*/