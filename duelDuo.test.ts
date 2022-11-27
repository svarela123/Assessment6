
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(3000)
})

test('Add to Duo', async () => {
    const add = await driver.findElement(By.id('add'))
    const displayed = await add.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(3000)
})