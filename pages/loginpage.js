import {expect} from '@playwright/test'
export class Loginpage{

  constructor(page){
  this.page = page
  this.usernamefield= page.locator('#loginusername')
  this.passwordfield= page.locator('#loginpassword')
  this.loginbutton = page.locator('//button[text()="Log in"]')
  this.closebutton = page.locator('//*[@id="logInModal"]/div/div/div[3]/button[1]')
  this.logout = page.locator('#logout2')

}


async openApplication(){
   await this.page.goto("https://www.demoblaze.com/")

   await this.page.locator('#login2').click()
}

async OpenloginDetails(username,password){
  await this.usernamefield.fill(username)
  await this.passwordfield.fill(password)
  await this.loginbutton.click()

}

async Wrongusername(username,password){      //here the parameter should be same as in the testdata in json
  await this.usernamefield.fill(username)
  await this.passwordfield.fill(password)

 const dialogPromise = this.page.waitForEvent('dialog')

  await this.loginbutton.click()

  const dialog = await dialogPromise

  console.log(dialog.message())
  console.log(dialog.type())

  expect(dialog.message()).toBe('User does not exist.')

  await dialog.accept()

}

async Wrongpassword(username,password){

  await this.usernamefield.fill(username)
  await this.passwordfield.fill(password)
  const dialogPromise = this.page.waitForEvent('dialog')

  await this.loginbutton.click()

  const dialog = await dialogPromise

  console.log(dialog.message())
  console.log(dialog.type())

  expect(dialog.message()).toBe('Wrong password.')

  await dialog.accept()
}

async Invalidcredetials(username,password){
  await this.usernamefield.fill(username)
  await this.passwordfield.fill(password)

   const dialogPromise = this.page.waitForEvent('dialog')

    await this.loginbutton.click()

    const dialog = await dialogPromise

    console.log(dialog.message())
    console.log(dialog.type())

    expect(dialog.message()).toBe('User does not exist.')

    await dialog.accept()

}

async Closelogindetails(username,password){
  await this.usernamefield.fill(username)
  await this.passwordfield.fill(password)
  await this.closebutton.click()
}


async Logout(){
  await this.logout.click()
}


}

