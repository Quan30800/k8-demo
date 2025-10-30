import { ProductPage } from "../page/productrpage";
import { test, expect } from '@playwright/test'


test ('Product page', async({page})=> {

    let productPage = new ProductPage(page)
    const arrayProduct = [
        {
            name : "Product 1",
            price : 10,
            quantity : 2
        },
        {
            name : "Product 2",
            price : 20,
            quantity : 2
        },
        {
            name : "Product 3",
            price : 30,
            quantity : 1
        },
    ]

    await test.step("Truy cập  trang web ProductPage", async()=>{
        productPage.gotoProductPage();
    })

    await test.step("Thêm sản phẩm vào giỏ hàng", async()=>{
        for(let i = 0; i< arrayProduct.length; i++){
            await productPage.addProductToCart(arrayProduct[i].name, arrayProduct[i].quantity );
        }
    })

    await test.step("Kiểm tra số lượng sản phẩm tại giỏ hàng đúng", async()=>{
        for(let i = 0; i< arrayProduct.length; i++){
        const actualQuantityProduct = (await productPage.getProductInfor(arrayProduct[i].name)).quanity;
        const expectedQuantityProduct = arrayProduct[i].quantity;
        expect(actualQuantityProduct).toEqual(expectedQuantityProduct.toString()); 
        }
    })

    await test.step("Kiemtra tổng tien tại giỏ hàng đúng cho mỗi sản phẩm", async()=>{
        for(let i = 0; i< arrayProduct.length; i++){
        const actualTotalProduct = (await productPage.getProductInfor(arrayProduct[i].name)).total;
        const totalforEachProduct = arrayProduct[i].price * arrayProduct[i].quantity;
        const expectedtotalProduct = "$" + totalforEachProduct.toFixed(2); // thêm 2 số ở đằng sau - số thập phân
        expect(actualTotalProduct).toEqual(expectedtotalProduct);

        }

    })
})