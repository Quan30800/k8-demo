 import { Locator, Page} from '@playwright/test'

 export class materialsPage{
    page : Page;
    xpathRegisterPage : string ;
    xpathProductPage : string ;
    cssTodoPage : string;
    personalNote : string;


    constructor(page:Page){
        this.page = page;
    };

    async openMaterialPage() {
        await this.page.goto("https://material.playwrightvn.com/");
    }

    async gotoPage(pageName : string ){
        await this.page.locator(`//a[contains(text(),${pageName})]`).click();
    }
    

 }