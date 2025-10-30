import { Page } from "@playwright/test";
import { materialsPage } from "./materialPage";

export class toDopage extends materialsPage {
    constructor(page : page ){
        super(page);
    }

    async goToToDoPage(){
         await this.openMaterialPage();
        await this.gotoPage("Todo page");
    }


    async fillInToDoField( i : number ){
        await this.page.locator("//input[@id='new-task']").fill(`to do <${i}>`);
    }

    async clickonAddbutton(){
        await this.page.locator("//button[@id='add-task']").click();
    }

    async iteminViewport(todoNumber: number) {
        return this.page.locator(`//ul[@id="task-list"]/li/span[normalize-space(.)='to do <${todoNumber}>']`);
        }

    async setDialog(){
      this.page.on('dialog', async (dialog) => {
      await dialog.accept(); // Tự động nhấn OK
    });


    }
    async deleteTask(i : number){
        await this.page.locator(`//button[@onclick='editTask(${i})']/following-sibling::button`).click();
    }

}
