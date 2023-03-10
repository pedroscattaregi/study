import { Builder } from 'selenium-webdriver'
import { environment } from '../support/environment'

describe('Description Feature', function () {
  it('Test description', async function () {
    // start test with Should normally
    // given
    const driver = await new Builder().forBrowser('chrome').build()
    // when
    await driver.navigate().to(environment.BASE_URL)
    // then
  })
})
