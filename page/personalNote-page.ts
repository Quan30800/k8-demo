import { materialsPage } from "./materialPage";
import {page} from '@playwright/test';

export class personalNote extends materialsPage{
    constructor( page : page){
        super(page)
    }

    async gotopersonalNote(){
        await this.openMaterialPage();
        await this.gotoPage("Personal notes")
    }

    async navigateToKhoaHOc(){
        await this.page.goto("https://vnexpress.net/khoa-hoc,");
    }

    async getDatafromVNexpress(){
        
    }
}