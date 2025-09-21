import {test} from '@playwright/test'

test('Locators', async ({page}) => {
  // Generic Locator
  await page.locator('[id="user-name"]').click()
  // By Role
  await page.getByRole('textbox', {name: 'Username'}).click()
  // By Text
  await page.getByText('Swag Labs').click()

  // data-testid
  await page.getByTestId('login-button').click()
})
