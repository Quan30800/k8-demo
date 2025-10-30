import { Page } from "@playwright/test";
import { materialsPage } from "./materialPage";
import { info } from "console";


export class RegisterPage extends materialsPage {
    xpathUserName = '//input[@id="username"]';
    xpathEmail = '//input[@id="email"]';
    xpathGenderMale = '//input[@id="male"]' ;
    xpathGenderFemale = '//input[@id="female"]';    
    getXpathOptionHobby (hobby: "reading"| "traveling"| "cooking"){
        return `//input[@id='${hobby}']`
    }
    xpathSelectInterest = '//select[@id="interests"]' ;
    xpathSelectCountry = '//select[@id="country"]' ;
    xpathDateOfBirth = '//input[@id="dob"]' ;
    xpathProfilePicture ='//input[@id="profile"]' ;
    xpathBiography = '//textarea[@id="bio"]';
    xpathNewsletter = '//input[@id="newsletter"]'
    xpathBtnRegister = "//button[@type='submit']" ;

    constructor(page: Page){
        super(page); 
    }

    async gotoRegisterPage(){
        await this.openMaterialPage();
        await this.gotoPage("Register Page");
    }

    async fillUserName(username : string){
        await this.page.locator(this.xpathUserName).fill(username);
    }

    async fillEmail(email : string){
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async checkGender(gender : "Male"| "Female"){
        if(gender == "Male") {
            await this.page.locator(this.xpathGenderMale).click();
        }

        if(gender == "Female") {
            await this.page.locator(this.xpathGenderFemale).click();
        }
    }

    async checkHobbies(hobby: "reading"| "traveling"| "cooking"){
        await this.page.locator(this.getXpathOptionHobby(hobby)).check();
    }

    async selectInterest(interestValue: "technology" | "science" | "art"){
        await this.page.selectOption(this.xpathSelectInterest, interestValue);
    }

    async selectCountry(countryValue: "usa"| "canada"| "uk"| "australia"){
        await this.page.selectOption(this.xpathSelectCountry, countryValue);
    }

    async fillDateOfBirth(date: string){
        await this.page.locator(this.xpathDateOfBirth).fill(date);
    }

    async chooseFile(filePath: string){
        await this.page.setInputFiles('//input[@id="profile"]', filePath);
    }

    async fillBiography(bio : string){
        await this.page.locator(this.xpathBiography).fill(bio);
    }

    async checkNewsLetter(){
        await this.page.locator(this.xpathNewsletter).check();
    }
    async clickButtonRegister(){
        await this.page.locator(this.xpathBtnRegister).click();
    }
    

    async fillFormRegister(information: {
        username : string,
        email:string,
        gender: "Male"|"Female",
        hobby : "reading"| "traveling" | "cooking",
        interestValue : "technology" | "science" | "art",
        countryValues : "usa"| "canada"| "uk",
        date : string;
        filePath : string;
        bio: string;
    }){
        await this.fillUserName(information.username);
        await this.fillEmail(information.email);
        await this.checkGender(information.gender);
        await this.checkHobbies(information.hobby);
        await this.selectInterest(information.interestValue);
        await this.selectCountry(information.countryValues);
        await this.fillDateOfBirth(information.date);
        await this.chooseFile(information.filePath);
        await this.fillBiography(information.bio);
        await this.clickButtonRegister();
    }

    async getNewestIntable(){
        const numberOfRow = await this.page.locator("//tbody/tr").count();
        let userInfo = {
            username: await this.page.locator( `//tbody/tr[${numberOfRow}]/td[2]`).textContent(),
            email : await this.page.locator( `//tbody/tr[${numberOfRow}]/td[3]`).textContent(),
            information : await this.page.locator( `//tbody/tr[${numberOfRow}]/td[4]`).textContent(),
        }
        return userInfo;
    }
}