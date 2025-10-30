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

    async addProductToCart(productName : string, quantity : number){
        await this.page.locator(`//div[@class='${productName}']/following-sibling::button`).click({clickCount: quantity}); 
    }

    async getProductInfor(productName : string){
       const Price = await this.page.locator(`//td[contains(text(),'${productName}')]/following-sibling::td[1]`).textContent();
       const quantity =  await this.page.locator(`//td[contains(text(),'${productName}')]/following-sibling::td[2]`).textContent();
       const total =  await this.page.locator(`//td[contains(text(),'${productName}')]/following-sibling::td[3]`).textContent();
       const inforProduct = { 
        Price,
        quantity,
        total
       }
       return inforProduct;
    }
    async getTotalProductInBasket(){
        const getTotalProductInBasket = await this.page.locator("//td[@class='total-price']").textContent();
        return getTotalProductInBasket; 

    }

}