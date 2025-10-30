    import { toDopage } from "../page/toDoPage";
    import { test, expect} from '@playwright/test';

    test ('todoPage', async({page})=>{
        
        let toDoPage = new toDopage(page)

        await test.step("Navigate to Product Page", async()=>{
           await  toDoPage.openMaterialPage();
            await toDoPage.goToToDoPage();
        })

        await test.step("them moi 100 item", async()=>{
            for( let i = 1; i <= 100; i++ ){
                await toDoPage.fillInToDoField(i);
                await toDoPage.clickonAddbutton();
            }
        })

        await test.step("xoa cac todo co so le", async()=>{

            await toDoPage.setDialog();
            for (let i = 99; i >= 1; i--) {
                if (i % 2 !== 0) {
                    await toDoPage.deleteTask(i - 1);
                }
            }
        })

        await test.step("kiem tra todo co so thu tu 90 nam trong viewport", async () => {
        const item = await toDoPage.iteminViewport(90);
        await expect(item).toBeVisible();
        });

       await test.step("kiem tra todo co so thu tu 21 ko nam trong viewport", async () => {
        const item = await toDoPage.iteminViewport(21);
        await expect(item).not.toBeVisible();
        })
        await page.pause(); 
    })