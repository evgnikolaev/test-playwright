/*


https://stepik.org/lesson/1597868/step/1?unit=1619506


Командная строка Playwright


Основные команды

        npx playwright test	                                        Запускает все тесты в проекте.
        npx playwright test tests/todo-page.spec.ts	                Запускает тесты из указанного файла.
        npx playwright test tests/todo-page/ tests/landing-page/	Запускает тесты из указанных папок.
        npx playwright test my-spec my-spec-2	                        Запускает тестовые файлы, содержащие my-spec или my-spec-2 в названии.
        npx playwright test my-spec.ts:42	                        Запускает тест, находящийся на строке 42 в файле my-spec.ts.
        npx playwright test -g "add a todo item"	                Запускает тест по заголовку (title).




Режимы выполнения тестов

        npx playwright test --headed	                Запускает тесты в режиме с UI браузера (виден браузер).
        npx playwright test --project=chromium	        Запускает тесты в конкретном браузере (Chromium, Firefox, WebKit).
        npx playwright test --workers=1	                Отключает параллельное выполнение тестов (запуск в один поток).
        npx playwright test --reporter=dot	        Указывает формат вывода результатов (dot, list, json, html и др.).
        npx playwright test --ui	                Запускает тесты в интерактивном UI режиме с возможностью управления тестами.



Режимы отладки

        npx playwright test --debug	        Запускает Playwright Inspector для отладки тестов (включает UI-инспектор, останавливает тесты перед завершением).
        npx playwright test --headed	        Запускает тесты в режиме с UI браузера, что помогает отладке.
        npx playwright test --ui	        Открывает интерактивный режим с управлением тестами, просмотром шагов и возможностью их перезапуска.




Отладка тестов

        npx playwright test --last-failed	Запускает только последние упавшие тесты.
        npx playwright test --retries=2	        Устанавливает количество повторных запусков для нестабильных тестов.




Продвинутые настройки

        npx playwright test --max-failures=5	        Останавливает выполнение тестов после 5 неудач.
        npx playwright test --only-changed	        Запускает тесты только для измененных файлов (Git).
        npx playwright test --global-timeout=60000	Устанавливает максимальное время выполнения тестов (60 секунд).
        npx playwright test -g "login"	                Запускает только тесты, содержащие "login" в названии.
        npx playwright test --list	                Показывает список тестов без их выполнения.




Работа с конфигурацией

        npx playwright test --config=my-config.ts	Использует указанный конфигурационный файл.
        npx playwright test --workers=4	                Запускает тесты в 4 потоках.
        npx playwright test --output=results/	        Сохраняет результаты тестов в папку results/.
          
        

Обновление и работа со снапшотами

        npx playwright test --ignore-snapshots	        Отключает проверки скриншотов и снапшотов DOM.
        npx playwright test --update-snapshots	        Обновляет эталонные скриншоты и снапшоты.




Дополнительные команды

        npx playwright test --help	        Показывает список всех доступных команд.





*/