import { test } from '../fixtures/smokeTestFixture'
import { CreateDocumentPage } from '../src/pageObjects/common/createDocument.po';

test.describe("Smoke Test", async ()=>{
    await test("Create and Delete a Document", async ({documentSearchPage, navigation, page, createDocumentPage}) => {

        await createDocumentPage.createDoc()
    
    })
  })
