/*


https://stepik.org/lesson/1595530/step/1?unit=1617125


Утверждения

    - Assertions — это проверки, которые удостоверяют, что приложение ведёт себя ожидаемо. 
    - В Playwright они автоматически ждут выполнения условия.


    await expect( locator ).toHaveText('Submitted');

    expect.soft() - мягкая проверка, для продолжения теста после неудачи





    Настройка параметров

        Изменить таймаут для конкретной проверки
            await expect(el).toHaveText('Done', { timeout: 15000 });

        Игнорировать регистр текста
            await expect(el).toHaveText('hello', { ignoreCase: true });

        Проверка с регулярным выражением
            await expect(el).toHaveText(/Order #\d+/);





    Автоматически повторяющиеся утверждения
    Эти утверждения повторяются до тех пор, пока не выполнится условие или не истечёт тайм-аут.

        toBeVisible()	    - Элемент видим.
        toBeHidden()	    - Элемент скрыт.
        toHaveText()	    - Элемент содержит текст.
        toBeEnabled()	    - Элемент доступен для взаимодействия.
        toBeDisabled()	    - Элемент недоступен для взаимодействия.
        toBeChecked()	    - Чекбокс установлен.
        toHaveAttribute()	- Элемент содержит атрибут.
        toHaveTitle()	    - Страница содержит определённый заголовок.
        toHaveURL()	        - URL страницы соответствует значению.
        toBeOK()	        - Ответ имеет статус "OK" (200).




    Не повторяющиеся утверждения
    Эти утверждения выполняются только один раз.

        toBe()	            - Проверяет идентичность значений.                         expect(строка).toBe('Практика page.evaluate()');
        toEqual()	        - Проверяет глубокое равенство.
                                                                expect(объект).toEqual({
                                                                    title: expect.stringContaining('Пользователь #'),
                                                                    date: expect.stringContaining('Дата создания:'),
                                                                    color: 'rgba(0, 0, 0, 0)', // прозрачный фон
                                                                    });

        toBeNull()	        - Значение равно null.
        toBeDefined()	    - Значение определено.
        toBeGreaterThan()	- Значение больше указанного.                              expect(значение).toBeGreaterThan(0);
        toContain()	        - Строка содержит подстроку или массив элемент.            expect(строка).toContain('Исходное содержимое');





    Продвинутые проверки:
        toHaveClass(/alert-success/)               - есть класс

        toHaveValue                                - Проверка инпута 

        toHaveJSProperty                           - Проверка состояния элемента, которое меняется JavaScript-скриптами,

toHaveCount - точное количество DOM-узлов.

        toHaveCount(5)                             - Проверка количества элементов

        toHaveCSS('color', 'rgb(255, 0, 0)');    - Проверка CSS-стилей
       
        toHaveScreenshot('homepage.png');          - Проверка скриншота (визуальное тестирование)

        not.toBeVisible();                         - Негативные проверки
        .not.toHaveURL('error');                   - Негативные проверки

        toHaveURL                                  - Проверка url










Кастомизация и дополнительные возможности утверждений

    В автоматизированном тестировании важно уметь работать с динамическим контентом и асинхронными операциями. 
    Playwright предоставляет встроенные утверждения (например, toHaveText(), toBeVisible()), но иногда их недостаточно. 
    Здесь на помощь приходят:
        expect.poll()
        expect().toPass() 



    Можно настроить expect с собственными значениями по умолчанию:

        const slowExpect = expect.configure({ timeout: 10000 });
        await slowExpect(locator).toHaveText('Submit');






    expect.poll()    - Позволяет создать кастомное утверждение с повторяющейся проверкой условия.

        Пример 1: Проверка динамически изменяющегося текста

                    test('Текст должен измениться через 5 секунд', async ({ page }) => {
                        await page.goto('/dashboard');

                        await expect.poll(async () => {
                            const text = await page.locator('#status').textContent();
                            return text.trim();
                            }, {
                                timeout: 10000,                                                 // Максимальное время ожидания
                                intervals: [1000]                                               // Интервал проверки каждую секунду
                        }).toBe('Данные обновлены');
                    });

                  





    expect().toPass()    - Выполняет блок кода несколько раз до успешного завершения или таймаута.

        Пример 2: Повторная проверка API-ответа
                test('API возвращает корректные данные', async ({ request }) => {
                    await expect(async () => {
                    const response = await request.get('/api/data');
                    const data = await response.json();
                    expect(data.status).toBe('completed');
                    }).toPass({ timeout: 15000 });                                              // 15 секунд на повторные попытки
                });



    Ключевые отличия

 	                                   poll()	                       toPass()
        Область применения	      Для отдельных проверок	      Для блоков кода
        Возвращаемое значение	  Требует возврата значения	      Не требует явного возврата

















    
*/