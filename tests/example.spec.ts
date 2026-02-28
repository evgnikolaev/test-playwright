import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {

  const response = {
    "meta": {
        "page": 1,
        "has_next": false,
        "has_previous": false
    },
    "course-recommendations": [
        {
            "id": 1197628689,
            "courses": [
                116336,
                116336,
                116336,
                116336,
                116336,
                116336,
                116336,
                116336,
                116336,
                116336,
                116336,
                116336,
                115372,
                116336,
                116336,
                116336,
                116336,
                116336,
                116336,
                116336
            ],
            "kind": 4
        }
    ]
  };

  await page.route('https://stepik.org/api/course-recommendations?source=catalog%3Arecommended&scenario=default&language=ru&platform=1',async (route)=>{
    await route.fulfill({
      status:200,
      json: response
    })
  });

  await page.goto("https://stepik.org/catalog");
  await page.waitForTimeout(5000);
});





test("test2", async ({ page }) => {

  await page.routeFromHAR('./hars/catalog.har',{
    url:'https://stepik.org/api/course-recommendations?source=catalog%3Arecommended&scenario=default&language=ru&platform=1',
   update: false,
  });


  await page.goto("https://stepik.org/catalog");


});
