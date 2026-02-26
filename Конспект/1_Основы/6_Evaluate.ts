/*


https://stepik.org/lesson/1606516/step/1?unit=1628248


Evaluating JavaScript в Playwright

    Метод page.evaluate() используется для выполнения JavaScript-функции в контексте веб-страницы. 
    Все браузерные объекты, такие как window и document, доступны внутри этой функции.


            const href = await page.evaluate(() => document.location.href);
            console.log(href); // Выводит URL текущей страницы



            const status = await page.evaluate(async () => {
                const response = await fetch(location.href);
                return response.status;
            });
            console.log(status); // Выводит HTTP-статус страницы






    Разделение окружений
        Playwright-окружение — выполняет ваш тестовый код.
        Браузерное окружение — выполняет код страницы.

        
        
    Аргументы в evaluate()

        const data = 'some data';
            await page.evaluate(data => {
            // Передаём "data" как аргумент
            window.myApp.use(data);
        }, data);









*/