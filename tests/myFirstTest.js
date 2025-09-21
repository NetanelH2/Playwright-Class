import {test} from '@playwright/test'

test('Login with valid user', async ({page}) => {
  await page.goto('https://www.google.com')
})
