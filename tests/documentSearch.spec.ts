import { test } from '../fixtures/smokeTestFixture'
import { DocumentSearchPage } from '../src/pageObjects/documentSearch.po'

test.describe("Smoke Test", async ()=>{
    await test("Navigate to document search page", async ({documentSearchPage, navigation, page,}) => {

        await navigation.navigateTo('documentsearchclientweb/search')
        await documentSearchPage.inputName

    })
  })
