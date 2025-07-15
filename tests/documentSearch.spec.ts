import { test } from '../fixtures/smokeTestFixture'

test("Navigate to document Basic search page", async ({documentSearchPage, navigation, page,}) => {

    await navigation.navigateTo('documentsearchclientweb/search')
    await documentSearchPage.inputName()

})



