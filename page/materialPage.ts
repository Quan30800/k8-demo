 import { Locator, Page} from '@playwright/test'

 export class materialsPage{
    page : Page;

    constructor(page:Page){
        this.page = page;
    };

    async openMaterialPage() {
        await this.page.goto("https://material.playwrightvn.com/");
    }

    async gotoPage(pageName : string ){
        await this.page.locator(`//a[contains(.,${pageName})`).click();
    }
    

 }