/*


https://stepik.org/lesson/1624678/step/1?unit=1646829



    Тестирование снимков (Snapshot Testing) позволяет проверять дерево доступности страницы (accessibility tree) на соответствие заранее сохраненному шаблону. 
    Это особенно полезно для автоматического контроля изменений структуры страницы.
    Сравнение регистрозависимое, но игнорирует пробелы и отступы.

            .toMatchAriaSnapshot()


            await expect(page.locator('body')).toMatchAriaSnapshot(`
                - heading /Текст \d+/
            `);




 Формат YAML:

            - role "name" [attribute=value]

                    role                – HTML или ARIA-роль элемента (button, heading, list и т. д.).
                    "name"              – доступное имя (например, текст кнопки).
                    [attribute=value]   – дополнительные атрибуты (checked, disabled и т. д.).



            
                    
Генерация и обновление снимков
            .ariaSnapshot()

            const snapshot = await page.locator('body').ariaSnapshot();
            console.log(snapshot);





Когда использовать Snapshot Testing?
    - Для тестирования UI-страниц и компонентов.
    - Для проверки структурных изменений.
    - В регрессионном тестировании.


Когда использовать Assertion Testing?
    - Для проверки конкретных значений и логики.
    - Для тестирования динамического контента.







*/