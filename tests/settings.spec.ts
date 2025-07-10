import { test } from '../fixtures/smokeTestFixture'

test("Create User", async ({navigation, settingsPage}) => {
    await navigation.clickOnSettings()
    await settingsPage.clickOnUserPermission()
    await settingsPage.clickOnCreateBtn()

})