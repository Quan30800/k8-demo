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
       await productPage.gotoProductPage();
    })

    await test.step("Thêm sản phẩm vào giỏ hàng", async()=>{
        for(let i = 0; i< arrayProduct.length; i++){
            await productPage.addProductToCart(arrayProduct[i].name, arrayProduct[i].quantity );
        }
    })

    await test.step("Kiểm tra số lượng sản phẩm tại giỏ hàng đúng", async()=>{
        for(let i = 0; i< arrayProduct.length; i++){
        const actualQuantityProduct = (await productPage.getProductInfor(arrayProduct[i].name)).quantity;
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

    await test.step("Kiểm tra tổng tiền tại giỏ hàng trong rổ", async () => {
        // Tổng tiền hiển thị trên UI
        const actualTotalInBasket = await productPage.getTotalProductInBasket();

        // Tổng tiền mong đợi tính từ arrayProduct
        const expectedTotalInBasket = arrayProduct.reduce(
        (sum, p) => sum + p.price * p.quantity,0);

        expect(actualTotalInBasket).toBeCloseTo(expectedTotalInBasket, 2);
    });

    })