/*


https://stepik.org/lesson/1669874/step/1?unit=1692901




Виды:
    - list - по умолчанию (кроме CI,там dot). Он выводит строку для каждого выполняемого теста.
    - line - Он использует одну строку для отображения последнего завершенного теста и выводит ошибки по мере их возникновения. 
    - dot  - он выводит только один символ для каждого успешного тест
    - html  
    - json
    - junit




    
Пример создания:

        npx playwright test --reporter=list
    

    или в конфигурационном файле

        import { defineConfig } from '@playwright/test';

        export default defineConfig({
        reporter: [['list', { printSteps: true }]],
        });


*/