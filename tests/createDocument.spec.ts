import { test } from '../fixtures/smokeTestFixture'

test.describe("Smoke Test", async ()=>{
    await test.only("Create and Delete a Document", async ({navigation}) => {
        const createDocumentPage = await navigation.clickOnCreateDocumentBtn()
        await createDocumentPage.clickOnSelectFiles()
    })
  })
