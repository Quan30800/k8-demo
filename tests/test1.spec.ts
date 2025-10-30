import { test, expect} from "@playwright/test"
import { RegisterPage } from "../page/register-page"
import { access } from "fs";

let date = "2024-08-16";
let username = "Playwright Viet Nam";
let email = "playwrightvietnam@gmail.com";
let description = "Đây là lớp Playwright K8";

test("Exercise 1: Register Page", async ({ page }) => {
  let registerPage = new RegisterPage(page);

  await test.step("Truy cập trang Register Page", async () => {
    await registerPage.gotoRegisterPage();
  });

  await test.step("Nhập đầy đủ các thông tin, click button register", async () => {
    // fill info
    await registerPage.fillUserName(username);
    await registerPage.fillEmail(email);
    await registerPage.checkGender("Female");
    await registerPage.checkHobbies("cooking");
    await registerPage.selectInterest("technology");
    await registerPage.selectCountry("usa");
    await registerPage.chooseFile("tests/file.ts");
    await registerPage.fillDateOfBirth(date);
    await registerPage.fillBiography(description);
    await registerPage.checkNewsLetter();

    // click button register
    await registerPage.clickButtonRegister();
  });

  await test.step("Kiểm tra nội dung đã đăng ký ở bảng là đúng", async()=> {
    const userInfor = await registerPage.getNewestIntable();
    const actualUserName = userInfor.username;
    const actualEmail = userInfor.email;
    const actualInformation = userInfor.information; 

     // verify user name and email
    
    expect(actualUserName).toBe(username);
    expect(actualEmail).toBe(email);
    // verify informationm

    expect(actualInformation).toContain("female");
    expect(actualInformation).toContain("cooking");
    expect(actualInformation).toContain("usa");
    expect(actualInformation).toContain(date);
    expect(actualInformation).toContain(description);
    expect(actualInformation).toContain("Yes");



  })
   

});