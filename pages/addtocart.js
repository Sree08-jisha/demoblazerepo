import {expect} from '@playwright/test'
export class Addtocart{

  constructor(page){
  this.page = page
  this.usernamefield= page.locator('#loginusername')
  this.passwordfield= page.locator('#loginpassword')
  this.loginbutton = page.locator('//button[text()="Log in"]')
  this.producttaken = page.locator('//a[text()="Samsung galaxy s6"]')
  this.addtocartoption = page.locator('//a[text()="Add to cart"]')
  this.phones = page.locator('//a[text()="Phones"]')
  this.monitors = page.locator('//a[text()="Monitors"]')
  this.Asusfullhd = page.locator('//a[text()="ASUS Full HD"]')
  this.naukialumiaphone = page.locator('//a[text()="Nokia lumia 1520"]')
  this.cart = page.locator('//a[text()="Cart"]')
  this.placeorder = page.locator('//button[text()="Place Order"]')
  this.purchase = page.locator('//button[text()="Purchase"]')
  this.okbutton = page.locator('//button[text()="OK"]')


  this.namefield = page.locator('#name')
  this.countryfield = page.locator('#country')
  this.cityfield = page.locator('#city')
  this.creditcardfield = page.locator('#card')
  this.monthfield = page.locator('#month') 
  this.yearfield = page.locator('#year')


}


async openApplication(){
   await this.page.goto("https://www.demoblaze.com/")

   await this.page.locator('#login2').click()
}

async openLoginDetails(username,password){
  await this.usernamefield.fill(username)
  await this.passwordfield.fill(password)
  await this.loginbutton.click()

}

async product(){
    await this.producttaken.click()
    await this.addtocartoption.click()

    
  const dialogPromise = this.page.waitForEvent('dialog')

  await this.addtocartoption.click()

  const dialog = await dialogPromise

  console.log(dialog.message())
  console.log(dialog.type())

  expect(dialog.message()).toBe('Product added.')

  await dialog.accept()
}


async mobileproduct(){

  await this.phones.click()
  await this.naukialumiaphone.click()
  
  const dialogPromise = this.page.waitForEvent('dialog')

  await this.addtocartoption.click()


  const dialog = await dialogPromise

  console.log(dialog.message())
  console.log(dialog.type())

  expect(dialog.message()).toBe('Product added.')

  await dialog.accept()
  
  await this.cart.click()
  await this.placeorder.click()


}

async placeorderdetails(name,country,city,creditcard,month,year){
  await this.namefield.fill(name) 
  await this.countryfield.fill(country)
  await this.cityfield.fill(city)
  await this.creditcardfield.fill(creditcard)
  await this.monthfield.fill(month)
  await this.yearfield.fill(year)
   

  await this.purchase.click()

  await this.okbutton.click()
  
    
}

async monitorproduct(){
  
  await this.monitors.click()
  await this.Asusfullhd.click()

  const dialogPromise = this.page.waitForEvent('dialog')

  await this.addtocartoption.click()


  const dialog = await dialogPromise

  console.log(dialog.message())
  console.log(dialog.type())

  expect(dialog.message()).toBe('Product added.')

  await dialog.accept()
  
  await this.cart.click()
  await this.placeorder.click()
}
}
