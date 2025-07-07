import { test } from '../fixtures/smokeTestFixture'

test.describe("test suite", async ()=>{
    await test("navigate to document search page", async ({documentSearchPage, navigation}) => {

        await navigation.navigateTo('documentsearchclientweb/search')
        await documentSearchPage.inputName()

    })
  })