/*


https://www.youtube.com/watch?v=0lkpbQgfNJk
https://www.youtube.com/watch?v=kGcl_K4LfG8


Начало работы 
    в папке проекта запустить 
    npm init playwright@latest




https://stepik.org/lesson/1595089/?unit=1616662

Локаторы

    - ждёт, пока элемент появится в DOM, проверяет, что он видим и не перекрыт;
    - можно локаторы находить встроенным расширением VSCode, в трейсере при отладке или командой  
      npx playwright codegen https://playwright.dev/

    page.locator('button >> nth=0');  - CSS селектор (запасной вариант)




    Рекомендуемые:

    1. getByRole() — по роли и имени элемента, Работает через ARIA‑роли: button, checkbox, dialog, listitem

                    await page.getByRole('button', { name: 'Submit' }).click();

                    await page
                    .getByRole('button')
                    .filter({ hasNotText: 'Disabled' })
                    .click();




    2. getByText() — по видимому тексту

                await expect(page.getByText(/Welcome, .+!/)).toBeVisible();

                await page.getByText('Отправить', { exact: true }).click();
                
                        exact: true - точное совпдение, чтобы не искал подстроки
                        Находит <button>Отправить</button>, но не <button>Отправить форму</button>
                   



    3. getByLabel() — по меткам форм

                await page.getByLabel('Email').fill('test@mail.com');




    4. getByPlaceholder() — по placeholder

                await page.getByPlaceholder('Search...').type('Playwright');





    5. getByAltText() — по alt у изображений

                await expect(page.getByAltText('Company Logo')).toBeVisible();  




    6. getByTitle() — по атрибуту title

                <span title="Close">×</span>
                <button id="close-dialog" title="Close">×</button>

                await page
                .getByRole('dialog')
                .getByTitle('Close')
                .click();



    7. getByTestId() — по data-testid (лучший друг автотестов)

                <button data-testid="submit-button">Submit</button>

                await page.getByTestId('submit-button').click();





    Комбинированные и цепочные локаторы


        Первый, последний, N‑й элемент списка

                await page.getByRole('listitem').first().click();
                await page.getByRole('listitem').last().click();
                await page.getByRole('listitem').nth(1).click();


        Цепочка: ищем контейнер по тексту и внутри него кнопку

                await page
                .getByRole('listitem')
                .filter({ hasText: 'Product Beta' })
                .getByRole('button', { name: 'Details' })
                .click();

        Подъём к родителю

                await page
                .getByText('Product Alpha')
                .locator('..') // родитель
                .getByRole('button', { name: 'Details' })
                .click();








    Ожидания и состояния элементов


        Диалог:

            <div id="dialog-backdrop" role="dialog" ...>
            <div class="dialog" data-testid="modal">...</div>
            </div>

                    
        Тест:

            await page.getByTestId('open-dialog').click();

            await page.getByRole('dialog').waitFor({ timeout: 15000 });     //waitFor({ state: 'hidden' });
            await page.getByRole('dialog').getByTitle('Close').click();


    
            




    locator.filter() - сужает уже найденный набор элементов.
                       Использовать стоит поверх рекомендованных локаторов (getByRole, getByText, getByTestId), а не поверх случайного CSS.


                       has  - позволяет фильтровать по наличию дочерних элементов (заголовок, кнопка), а не по классам. 
                       hasText - есть такой текст?


                       

        HTML (фрагмент задач):

            <ul class="tasks-list" aria-label="Tasks list">
                <li>
                    <span data-testid="icon-check" class="icon icon-check"></span>
                    <span>Refactor tests (2022)</span>
                </li>
                <li>
                    <span data-testid="icon-pending" class="icon icon-pending"></span>
                    <span>Improve locators (2023)</span>
                </li>
                <li>
                    <span data-testid="icon-check" class="icon icon-check"></span>
                    <span>Implement filter() examples (2023)</span>
                </li>
            </ul>

          
            
            
        Playwright  (Нужна задача за 2023 год со "зеленой" иконкой (icon-check)):

            const tasksList = page.getByRole('list', { name: 'Tasks list' });
            const taskItems = tasksList.getByRole('listitem');

            if (await taskItems.count() > 0) {                              - Проверяйте count(), особенно на динамических страницах.
                await taskItems
                .filter({ hasText: '2023' })
                .filter({ has: page.getByTestId('icon-check') })
                .click();
            }
                  





        Отладка фильтров

            const items = page.getByRole('listitem');
            console.log('Items count:', await items.count());

            const filtered = items.filter({ hasText: '2023' });
            await filtered.highlight();                             // визуально подсвечивает найденные элементы

            await page.pause();                                     // позволяет поиграть с локаторами в DevTools
 


*/