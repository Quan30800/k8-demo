import { materialsPage } from "./materialPage";
import {page} from '@playwright/test';

// export class personalNote extends materialsPage{
//     constructor( page : page){
//         super(page)
//     }

//     async navigateToKhoaHOc(){
//         await this.page.goto("https://vnexpress.net/khoa-hoc");
//     }

//     async getDatafromVNexpress(){
//         this.navigateToKhoaHOc();
//        const titles = await this.page.locator('//h3[@class="title-news"]/a').allTextContents();
//        const contents = await this.page.locator('//p[@class="description"]/a').allTextContents();
//        const DatafromVNexpress = {
//         titles,
//         contents
//         }   
//        return DatafromVNexpress; 
//     }

//      async gotopersonalNote(){
//         await this.openMaterialPage();
//         await this.gotoPage("Personal notes")
//     }
//     async addTitle(Title : string ){
//         await this.page.locator("//input[@id='note-title']").fill(Title);
//     }
//     async addContent(Content : string ){
//         await this.page.locator("//input[@id='note-content']").fill(Content);
//     }

//     async clickAdd(){
//         await this.page.locator("//button[@id='add-note']").click()
//     }

//     async FillSearch(name : string ){
//         const search = await this.page.locator("//input[@id='search']");
//         await search.fill(name);
//         return search;
//     }

//     async getexpectedResult(){
//         const search = await this.page.locator("//ul[@id='notes-list']/li")
//         const actualResult = await search.allTextContents();
//         return actualResult;
//     }


// }

export class PersonalNote extends materialsPage{
    xpathTitle = "//input[@id='note-title']";
    xpathContent = "//input[@id='note-content']";
    xpathBtnAddNote = "//input[@id='note-content']";
    xpathSearchNotes = "//input[@id='search']";

    constructor(page : Page){
        super(page);
    }
    
    async gotopersonalNotesPage(){
        await this.openMaterialPage
        await this.gotoPage("Personal notes");
    }

    async fillTitle(title:string){
        await this.page.locator(this.xpathTitle).fill(title);
    }

    async fillContent(content : string){
        await this.page.locator(this.xpathContent).fill(content);
    }

    async clickAddNote(){
        await this.page.locator(this.xpathBtnAddNote).click();
    }

    async searchNote(note: string){
        await this.page.locator(this.xpathSearchNotes).fill(note);
    }

    async getAllTitlesInlist(){
        let ListTitle: string[] =[];
        const countTitles = await this.page.locator('//ul/li/descendant::strong').count();
        for ( let i = 1; i <= countTitles; i++){
            let title = await this.page.locator(`(//ul/li/descendant::strong)[${i}]`).textContent();
            ListTitle.push( title || "" );
        }

        return ListTitle;
    }
}