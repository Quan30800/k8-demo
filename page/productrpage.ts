import { materialsPage } from "./materialPage";
import { Page } from "@playwright/test";


export class ProductPage extends materialsPage{
    constructor(page : Page) {
        super (page)
    }

    async gotoProductPage(){
        await this.openMaterialPage();
        await this.gotoPage("Product Page");
    }

    async addProductToCart(productName : string, quanity : number){
        await this.page.locator(`//div[@class='${productName}']/following-sibling::button`).click({clickCount:quanity}); 
    }

    async getProductInfor(productName : string){
       const Price = await this.page.locator(`//td[contains(text(),'${productName}')]/following-sibling::td[1]`).textContent();
       const quanity =  await this.page.locator(`//td[contains(text(),'${productName}')]/following-sibling::td[2]`).textContent();
       const total =  await this.page.locator(`//td[contains(text(),'${productName}')]/following-sibling::td[3]`).textContent();
       const inforProduct = { 
        Price,
        quanity,
        total
       }
       return inforProduct;
    }
    // asynce totalinBasket(){ const total = await this.getProductInfor()  }

}