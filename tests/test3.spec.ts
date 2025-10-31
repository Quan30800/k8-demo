    import { TodoPage } from "../page/toDoPage";
    import { test, expect} from '@playwright/test';

    test("Add to do list", async ({page})=>{
        let todoPage = new TodoPage(page);
        
        await test.step (' Di den trang to do page', async()=>{
            await todoPage.goToToDoPage();
        })

        await test.step (' Them moi 100 todo list', async()=>{
             for( let i = 1; i <= 100; i++ ){
                await todoPage.addNewtasks(`Todo ${i}`);
            }
        })

        await test.step ('xoa cac to do co so le', async()=>{
            todoPage.page.on('dialog', async dialog =>{
                await dialog.accept();
            })

            for( let i = 1; i <= 100; i++ ){
                if (i % 2 !== 0) {
                    const content =`Todo ${i}`;
                    await todoPage.DeleteTasks(content);
                }
            }
        })

        await test.step('Kiem tra todo co so thu tu 90 nam trong view port', async()=>{
            const xpathtodo90 =todoPage.getLocatorTask("Todo 90");
            await expect(xpathtodo90).toBeInViewport({timeout : 1000}); 
        })

        await test.step('Kiem tra todo co so thu tu 21 nam trong view port', async()=>{
            const xpathtodo21 =todoPage.getLocatorTask("Todo 21");
            await expect(xpathtodo21).not.toBeInViewport({timeout : 1000}); 
        })

    })



    // test ('todoPage', async({page})=>{
        
    //     let toDoPage = new toDopage(page)

    //     await test.step("Navigate to Product Page", async()=>{
    //        await  toDoPage.openMaterialPage();
    //         await toDoPage.goToToDoPage();
    //     })

    //     await test.step("them moi 100 item", async()=>{
    //         for( let i = 1; i <= 100; i++ ){
    //             await toDoPage.fillInToDoField(i);
    //             await toDoPage.clickonAddbutton();
    //         }
    //     })

    //     await test.step("xoa cac todo co so le", async()=>{

    //         await toDoPage.setDialog();
    //         for (let i = 1; i <= 100; i++) {
    //             if (i % 2 !== 0) {
    //                 await toDoPage.deleteTask(i);
    //             }
    //         }
    //     })

    //     await test.step("kiem tra todo co so thu tu 90 nam trong viewport", async () => {
    //     const item = await toDoPage.iteminViewport(90);
    //     await expect(item).toBeVisible();
    //     });

    //    await test.step("kiem tra todo co so thu tu 21 ko nam trong viewport", async () => {
    //     const item = await toDoPage.iteminViewport(21);
    //     await expect(item).not.toBeVisible();
    //     })
    //     await page.pause(); 
    // })
