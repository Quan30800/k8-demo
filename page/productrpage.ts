import { materialsPage } from "./materialPage";
import { Page } from "@playwright/test";


export class ProductPage extends materialsPage{
    xpathProduct1 = "//button[@data-product-id='1']";
    xpathProduct2 = "//button[@data-product-id='2']";
    xpathProduct3 = "//button[@data-product-id='3']";

    xpathPriceProduct1 = "//tbody[@id='cart-items']/tr[1]/td[2]";
    xpathPriceProduct2 = "//tbody[@id='cart-items']/tr[2]/td[2]";
    xpathPriceProduct3 = "//tbody[@id='cart-items']/tr[3]/td[2]";


    constructor(page : Page){
        super(page);
    }

    async add1stProduct(){
        await this.page.locator(this.xpathProduct1).dblclick();
    }

    async add2ndProduct(){
        await this.page.locator(this.xpathProduct1).click({clickCount: 3 });
    }

    async add3rdProduct(){
        await this.page.locator(this.xpathProduct1).click();
    }

    async getProductPrice(){
       const price1st = await this.page.locator(this.xpathProduct1).innerText();
       const price2nd = await this.page.locator(this.xpathProduct2).innerText();
       const price3rd = await this.page.locator(this.xpathProduct3).innerText();

       
    }

}