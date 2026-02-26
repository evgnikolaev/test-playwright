/*


https://stepik.org/lesson/1597865/step/1?unit=1619503


playwright.config.ts.



Основные параметры конфигурации
        testDir	                Путь к директории с тестами.
        fullyParallel	        Запуск всех тестов из всех файлов параллельно.
        forbidOnly	            Вывод ошибки при обнаружении test.only (актуально для CI).
        retries	                Количество повторных запусков теста (например, на CI).
        workers	                Количество параллельных процессов-воркеров для выполнения тестов.
        reporter	            Репортер для генерации отчётов.
        projects	            Настройка тестов для разных браузеров или конфигураций.
        use	                    Опции для настройки тестовой среды, например, baseURL или trace.
        webServer	            Опции для запуска локального сервера перед тестами.



Пример

        import { defineConfig, devices } from '@playwright/test';

        export default defineConfig({
        testDir: 'tests',                                 // Директория с тестами.
        fullyParallel: true,                              // Запуск тестов в параллельном режиме.
        forbidOnly: !!process.env.CI,                     // Запрет на оставление тестов с test.only.
        retries: process.env.CI ? 2 : 0,                  // Количество попыток перезапуска на CI.
        workers: process.env.CI ? 1 : undefined,          // Количество воркеров для параллельных тестов.
        reporter: 'html',                                 // Репортер для генерации отчётов.
        use: {
            baseURL: 'http://127.0.0.1:3000',               // Базовый URL для тестов.
            trace: 'on-first-retry',                        // Формирование trace при первом перезапуске.
        },
        projects: [
            {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },        // Конфигурация для Chrome.
            },
        ],
        webServer: {
            command: 'npm run start',                       // Команда для запуска локального сервера.
            url: 'http://127.0.0.1:3000',                   // URL локального сервера.
            reuseExistingServer: !process.env.CI,           // Повторное использование сервера.
        },
        });










Фильтрация тестов

        testIgnore	    Игнорируемые шаблоны файлов. Например: '*test-assets'.
        testMatch	    Шаблоны или регулярные выражения для поиска тестов. Например: '*todo-tests/*.spec.ts'.



Пример

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
            testIgnore: '*test-assets',                 // Игнорировать тестовые файлы в директории test-assets.
            testMatch: '*todo-tests/*.spec.ts',         // Искать тесты только в директории todo-tests.
        });





        





Продвинутая конфигурация

        globalSetup	        Путь к файлу глобальной настройки (выполняется перед запуском тестов).
        globalTeardown	    Путь к файлу глобальной очистки (выполняется после выполнения тестов).
        outputDir	        Директория для артефактов (скриншоты, видео, трассы и т.д.).
        timeout	            Максимальное время выполнения каждого теста.


Пример

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
            outputDir: 'test-results',                                  // Директория для артефактов (скриншоты, видео и т.д.).
            globalSetup: require.resolve('./global-setup'),             // Глобальная настройка перед тестами.
            globalTeardown: require.resolve('./global-teardown'),       // Глобальная очистка после тестов.
            timeout: 30000,                                             // Таймаут для тестов (по умолчанию — 30 секунд).
        });






    
        

Настройки для ожиданий (expect)

        expect.timeout	                Таймаут для ожиданий expect.
        expect.toHaveScreenshot	        Настройка для expect(locator).toHaveScreenshot().
        expect.toMatchSnapshot	        Настройка для expect(locator).toMatchSnapshot().




Пример

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
        expect: {
            timeout: 5000, // Максимальное время ожидания для условий.
            toHaveScreenshot: {
            maxDiffPixels: 10, // Допустимое количество отличий в пикселях (скриншоты).
            },
            toMatchSnapshot: {
            maxDiffPixelRatio: 0.1, // Допустимое соотношение отличий пикселей.
            },
        },
        });



*/