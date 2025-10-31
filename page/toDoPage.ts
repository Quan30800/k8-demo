import { Page } from "@playwright/test";
import { materialsPage } from "./materialPage";

// export class toDopage extends materialsPage {
//     constructor(page : page ){
//         super(page);
//     }

//     async goToToDoPage(){
//          await this.openMaterialPage();
//         await this.gotoPage("Todo page");
//     }


//     async fillInToDoField( i : number ){
//         await this.page.locator("//input[@id='new-task']").fill(`to do <${i}>`);
//     }

//     async clickonAddbutton(){
//         await this.page.locator("//button[@id='add-task']").click();
//     }

//     async iteminViewport(todoNumber: number) {
//         return this.page.locator(`//ul[@id="task-list"]/li/span[normalize-space(.)='to do <${todoNumber}>']`);
//         }

//     async setDialog(){
//       this.page.on('dialog', async (dialog) => {
//       await dialog.accept(); // Tự động nhấn OK
//     });


//     }
//     async deleteTask(i : number){
//         await this.page.locator(`//button[@id='${i}-delete']`).click();
//     }

// }

export class TodoPage extends materialsPage {
    xpathEnterANewtask = "//input[@id='new-task']";
    xpathBtnAddTask = "//button[@id='add-task']"
    getLocatorTask(content: string){
        return this.page.locator(`//span[text()='${content}']`);
    }

    constructor(page : Page) {
        super(page);
    }

    async goToToDoPage(){
         await this.openMaterialPage();
        await this.gotoPage("Todo page");
    }

    async addNewtasks(content:string){
        await this.page.locator(this.xpathEnterANewtask).fill(content);
        await this.page.locator(this.addNewtasks).click();
    }

    async DeleteTasks(content:string){
        const xpath = (content.replace(" ","-")).toLowerCase();
        await this.page.locator(`//button[@id="${xpath}-delete"]`).click()}
}
