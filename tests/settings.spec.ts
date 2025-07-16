import { faker } from '@faker-js/faker'
import { test } from '../fixtures/smokeTestFixture'

test("Create User", async ({navigation, settingsPage}) => {
    const newUser  = {
        id: faker.number.int({max: 999}),
        name: faker.person.firstName(),
        email: faker.internet.email()
    }
    await navigation.clickOnSettings()
    await settingsPage.clickOnSecurity()
    await settingsPage.clickOnUserPermission()
    await settingsPage.clickOnCreateBtn()
    await settingsPage.enterUserID(`${newUser.id}`)
    await settingsPage.enterUserName(newUser.name)
    await settingsPage.clickVaadinSave()
    await settingsPage.columnSearchUserId(`${newUser.id}`)
   // await settingsPage.deleteUser()

})