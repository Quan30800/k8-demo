import { test, expect} from "@playwright/test"
import { RegisterPage } from "../page/register-page"

let date = "2024-08-16";
let username = "Playwright Viet Nam";
let email = "playwrightvietnam@gmail.com";
let description = "Đây là lớp Playwright K8";

test("Exercise 1: Register Page", async ({ page }) => {
  let registerPage = new RegisterPage(page);

  await test.step("Truy cập trang Register Page", async () => {
    await registerPage.goToRegisterPage();
  });

  await test.step("Nhập đầy đủ các thông tin, click button register", async () => {
    // fill info
    await registerPage.fillUserName(username);
    await registerPage.fillEmail(email);
    await registerPage.checkGender("Female");
    await registerPage.checkHobbies("cooking");
    await registerPage.selectInterest("cooking");
    await registerPage.selectCountry("usa");
    await registerPage.chooseFile("test-data/vsc.jpg");
    await registerPage.fillDateOfBirth(date);
    await registerPage.fillBiography(description);
    await registerPage.checkNewsLetter();

    // click button register
    await registerPage.clickButtonRegister();
  });
});