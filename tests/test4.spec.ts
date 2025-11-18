import { PersonalNote, personalNote } from "../page/personalNote-page";
import { test, expect } from '@playwright/test'

// test('Personal Note', async({page})=>{
//     let personalnote = new personalNote(page);

//     test.step('Di toi trang khoa hoc', async()=>{
//         await personalnote.navigateToKhoaHOc();
//     })

//     test.step('lay content va title tu trang khoa hoc', async()=>{
//         await personalnote.getDatafromVNexpress();
//     })

//     test.step('Di toi trang personal notess', async()=>{
//         await personalnote.gotopersonalNote();
//     })

//     test.step('them data vao trang khoa hoc', async()=>{
//         const data = await personalnote.getDatafromVNexpress();
//         for(let i = 0; i <= 10; i++){
//             await personalnote.addTitle(data.titles[i]);
//             await personalnote.addContent(data.contents[i]);
//             await personalnote.clickAdd();
// }
//     })

//     test.step("search theo keyword bat ky", async()=>{
//         await personalnote.FillSearch("a");
        
//     })

//     test.step("so sanh search vs output ", async()=>{
//         let expectedResult = await personalnote.getexpectedResult();
//         const searchInput = await personalnote.FillSearch("Khoa Hoc"); // fill input
//         const keyword = await searchInput.inputValue();

//         expectedResult.forEach(item => {
//         expect(item).toContain(keyword); })
//     })
// }
// )

test("Add personal notes", async ({ page })=>{
    let personalNotePage = new PersonalNote(page);

    const notes = [
        {title : " title 1", content : "content 1" },
        {title : " title 2", content : "content 2" },
        {title : " title 3", content : "content 3" },
        {title : " title 4", content : "content 4" },
        {title : " title 5", content : "content 5" }
        {title : " title 6", content : "content 6" },
        {title : " title 7", content : "content 7" },
        {title : " title 8", content : "content 8" },
        {title : " title 9", content : "content 9" },
        {title : " title 10", content : "content 10" }
    ]

    await test.step("đi đến trang personal page", async()=>{
        await personalNotePage.gotopersonalNotesPage();
    })

   await test.step("thêm mơi 10 note co noi dung la tieu de va content"){
    for ( const note of notes ){
        await personalNotePage.fillContent(note.content);
        await personalNotePage.fillTitle(note.title);
        await personalNotePage.clickAddNote();
    }
   } 

   await test.step("Thuc hien search theo tieu de bai bao bat ky", async()=>{
        await personalNotePage.searchNote("Viet");
   })

   await test.step("kiem tra tat ca cac bai viet search dc chua keyword da tien kiem", async()=>{
        const ListTitle = await personalNotePage.getAllTitlesInlist();
        for ( let i = 0; i < ListTitle.length; i++){
            expect(ListTitle[i]).toContain("Viet");
        }
   })
})