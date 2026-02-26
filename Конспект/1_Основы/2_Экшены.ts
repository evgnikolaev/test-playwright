/*


https://stepik.org/lesson/1595529/step/1?unit=1617124


Экшены локаторов

    - ждёт, пока элемент появится в DOM, проверяет, что он видим и не перекрыт;
    - если действие не удалось сразу (например, элемент немного сдвинулся), Playwright повторит попытку в рамках таймаута.
   


    Особенности:

        Таймауты

            await locator.click({ timeout: 15_000 });     - таймаут для конкретного экшена
            test.setTimeout(60_000);                      - таймаут по умолчанию для всего тест ( По умолчанию — 30 секунд )




        Принудительные действия (force: true)

            Позволяют обойти проверки видимости и перекрытий.
            Используются только как последний вариант, т.к. могут скрывать реальные проблемы в UI:

            await locator.click({ force: true });







    Мышь:

        await locator.click();        - Клик левой кнопкой
        await locator.dblclick();     - Двойной клик
        await locator.hover();        - Наведение курсора


        опции
                await locator.click({
                    button: 'right',        // 'left' | 'right' | 'middle'
                    modifiers: ['Control'], // модификаторы: 'Alt' | 'Control' | 'Meta' | 'Shift'
                    position: { x: 10, y: 10 },
                    timeout: 10_000,
                });



        dispatchEvent -  принудительный вызов событий (нажатие, наведение, изменение) на элементах, минуя проверки действия (actionability), что полезно для тестирования скрытых или перекрытых элементов. 

            await page.locator('#my-button').dispatchEvent('click');
            const element = page.locator('#draggable');
            await element.dispatchEvent('mousedown');

                



    Ввод текста

        await locator.fill('John Doe');
        await locator.type('slow typing', { delay: 100 });      - Печатает посимвольно, имитируя реальный набор,  100 мс между символами



    Работа с формами

        Чекбоксы и радиокнопки

            await locator.check();      - Установить (если ещё не установлен). Не рекомендуется: await locator.click();
            await locator.uncheck();    - Снять (если установлен)



        Выпадающие списки

                await locator.selectOption('us');                           - По значению value
                await locator.selectOption({ label: 'United States' });     - По видимому тексту
                await locator.selectOption({ index: 2 });                   - По индексу
                await locator.selectOption(['us', 'de']);                   - Несколько значений (мульти-Select)



        Загрузка файлов 

            await page.locator('#invoice').setInputFiles('tests/resources/invoice.pdf');

            await locator.setInputFiles([           - Несколько файлов
            'file1.pdf',
            'file2.pdf',
            ]);

            await locator.setInputFiles([]);        - Очистить выбранные файлы




        Очистка поля ввода   (В Playwright нет метода clear())

            await locator.fill('');         
            
            await locator.press('Control+A');
            await locator.press('Delete');





    Сложные взаимодействия

        Drag & Drop

                const source = page.locator('.item');
                const target = page.locator('.dropzone');

                await source.dragTo(target);

                        
            Опции (например — кастомные координаты):

                await source.dragTo(target, {
                    sourcePosition: { x: 10, y: 10 },
                    targetPosition: { x: 20, y: 20 },
                });




        Комбинации клавиш         

            Через locator:

                await locator.press('Control+A'); // Выделить всё в поле
                await locator.press('Enter');
                await locator.press('Tab');

                  
            Через page.keyboard (если нет конкретного поля):

                await page.keyboard.press('Control+P');







    Типичные ошибки и правильные решения

        1. «Элемент перекрыт другим»

            // Прокрутить, если не в видимой области
                await locator.scrollIntoViewIfNeeded();
                await locator.click();


            // Или дождаться корректного состояния UI:
                await expect(locator).toBeVisible();
                await locator.click();



        2. Динамический контент не успевает загрузиться

            // Не лучший вариант:
            await locator.click({ timeout: 45_000 });


            Лучший подход — явно дождаться нужного состояния:

                    // Дождаться появления элемента
                    await locator.waitFor({ state: 'visible' });
                    await locator.click();

                    // Дождаться навигации
                    await Promise.all([
                        page.waitForURL('**\/success'),
                        page.getByRole('button', { name: 'Submit' }).click(),
                    ]);

                    // Или дождаться текста/статуса
                    await expect(page.getByText('Order completed')).toBeVisible();

                    // используйте waitForURL, waitForResponse, locator.waitFor().





    Отладка действий

        Замедление выполнения для визуального анализа

            await locator.click({ delay: 2000 }); // задержка перед "отпусканием" клика


        Скриншоты после действий

            await locator.click();
            await page.screenshot({ path: 'after-click.png', fullPage: true });




*/