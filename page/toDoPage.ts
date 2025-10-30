import { Page } from "@playwright/test";
import { materialsPage } from "./materialPage";

export class toDopage extends materialsPage {
    constructor(page : Page ){
        super(page);
    }

    async goToToDoPage(){
         await this.openMaterialPage();
        await this.gotoPage("Todo Page");
    }


    async fillInToDoField( i : number ){
        await this.page.locator("//input[@id='new-task']").fill(`to do <${i}>`);
    }

    async clickonAddbutton(){
        await this.page.locator("//input[@id='Add task']").click();
    }

    async iteminViewport(i : number){
         return await this.page.locator(`//ul[@id="task-list"]/li[${i}]/span`)
       
    }

    async setDialog(){
      this.page.on('dialog', async (dialog) => {
      console.log(dialog.message());
      await dialog.accept(); // Tự động nhấn OK
    });


    }
    async deleteTask(i : number){
        await this.page.locator(`//button[@onclick='editTask(${i})']/following-sibling::button`).click();
    }

}
