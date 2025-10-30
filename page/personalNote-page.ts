import { materialsPage } from "./materialPage";
import {page} from '@playwright/test';

export class personalNote extends materialsPage{
    constructor( page : page){
        super(page)
    }

    async navigateToKhoaHOc(){
        await this.page.goto("https://vnexpress.net/khoa-hoc,");
    }

    async getDatafromVNexpress(){
        this.navigateToKhoaHOc();
       const titles = await page.locator('//h3[@class="title-news"]/a').allTextContents();
       const contents = await page.locator('//p[@class="description"]/a').allTextContents();
       const DatafromVNexpress = {
        titles,
        contents
        }   
       return DatafromVNexpress; 
    }

     async gotopersonalNote(){
        await this.openMaterialPage();
        await this.gotoPage("Personal notes")
    }
    async addTitle(Title : string ){
        await this.page.locator("//input[@id'note-title']").fill(Title);
    }
    async addContent(Content : string ){
        await this.page.locator("//input[@id'note-title']").fill(Content);
    }

    async clickAdd(){
        await this.page.locator("//button[@id='add-note']").click()
    }

    async FillSearch(name : string ){
        const search = await this.page.locator("//input[@id='search']");
        search.fill(name);
        const expectedSearch = search.inputValue();
        return expectedSearch;
    }
}