import { test } from '../fixtures/smokeTestFixture'

test("Create and Delete a Document", async ({navigation, page}) => {
    const createDocumentPage = await navigation.clickOnCreateDocumentBtn()
    await createDocumentPage.clickOnSelectFiles()
    await createDocumentPage.selectDocType('529-B')
    // await createDocumentPage.enterVendorNumber('123456')
    // await createDocumentPage.enterYear('2025')
    // await createDocumentPage.clickOnSaveBtn()
    // await createDocumentPage.clickElipsesAndDelete()
})



