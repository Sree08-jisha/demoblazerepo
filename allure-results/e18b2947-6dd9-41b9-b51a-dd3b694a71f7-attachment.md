# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addtocart.spec.js >> Placing the order from phone section
- Location: tests\addtocart.spec.js:23:6

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//button[text()="Purchase"]')
    - locator resolved to <button type="button" class="btn btn-primary" onclick="purchaseOrder()">Purchase</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1   | import {expect} from '@playwright/test'
  2   | export class Addtocart{
  3   | 
  4   |   constructor(page){
  5   |   this.page = page
  6   |   this.usernamefield= page.locator('#loginusername')
  7   |   this.passwordfield= page.locator('#loginpassword')
  8   |   this.loginbutton = page.locator('//button[text()="Log in"]')
  9   |   this.producttaken = page.locator('//a[text()="Samsung galaxy s6"]')
  10  |   this.addtocartoption = page.locator('//a[text()="Add to cart"]')
  11  |   this.phones = page.locator('//a[text()="Phones"]')
  12  |   this.naukialumiaphone = page.locator('//a[text()="Nokia lumia 1520"]')
  13  |   this.cart = page.locator('//a[text()="Cart"]')
  14  |   this.placeorder = page.locator('//button[text()="Place Order"]')
  15  |   this.purchase = page.locator('//button[text()="Purchase"]')
  16  | 
  17  | 
  18  |   this.namefield = page.locator('#name')
  19  |   this.countryfield = page.locator('#country')
  20  |   this.cityfield = page.locator('#city')
  21  |   this.creditcardfield = page.locator('#card')
  22  |   this.monthfield = page.locator('#month') 
  23  |   this.yearfield = page.locator('#year')
  24  | 
  25  | 
  26  | }
  27  | 
  28  | 
  29  | async openApplication(){
  30  |    await this.page.goto("https://www.demoblaze.com/")
  31  | 
  32  |    await this.page.locator('#login2').click()
  33  | }
  34  | 
  35  | async openLoginDetails(username,password){
  36  |   await this.usernamefield.fill(username)
  37  |   await this.passwordfield.fill(password)
  38  |   await this.loginbutton.click()
  39  | 
  40  | }
  41  | 
  42  | async product(){
  43  |     await this.producttaken.click()
  44  |     await this.addtocartoption.click()
  45  | 
  46  |     
  47  |   const dialogPromise = this.page.waitForEvent('dialog')
  48  | 
  49  |   await this.addtocartoption.click()
  50  | 
  51  |   const dialog = await dialogPromise
  52  | 
  53  |   console.log(dialog.message())
  54  |   console.log(dialog.type())
  55  | 
  56  |   expect(dialog.message()).toBe('Product added.')
  57  | 
  58  |   await dialog.accept()
  59  | }
  60  | 
  61  | 
  62  | async mobileproduct(){
  63  | 
  64  |   await this.phones.click()
  65  |   await this.naukialumiaphone.click()
  66  |   
  67  |   const dialogPromise = this.page.waitForEvent('dialog')
  68  | 
  69  |   await this.addtocartoption.click()
  70  | 
  71  | 
  72  |   const dialog = await dialogPromise
  73  | 
  74  |   console.log(dialog.message())
  75  |   console.log(dialog.type())
  76  | 
  77  |   expect(dialog.message()).toBe('Product added.')
  78  | 
  79  |   await dialog.accept()
  80  |   
  81  |   await this.cart.click()
  82  |   await this.placeorder.click()
  83  | 
  84  | 
  85  | }
  86  | 
  87  | async placeorderdetails(name,country,city,creditcard,month,year){
  88  |   await this.namefield.fill(name) 
  89  |   await this.countryfield.fill(country)
  90  |   await this.cityfield.fill(city)
  91  |   await this.creditcardfield.fill(creditcard)
  92  |   await this.monthfield.fill(month)
  93  |   await this.yearfield.fill(year)
  94  |    
  95  |   const dialogPromise = this.page.waitForEvent('dialog')
  96  |   
> 97  |   await this.purchase.click()
      |                       ^ Error: locator.click: Test ended.
  98  | 
  99  |  const dialog = await dialogPromise
  100 | 
  101 |   console.log(dialog.message())
  102 |   console.log(dialog.type())
  103 | 
  104 |   expect(dialog.message()).toBe('Thank you for your purchase')
  105 | 
  106 |   await dialog.accept()
  107 | }
  108 |   
  109 |     
  110 | }
  111 | 
  112 | 
  113 | 
  114 | 
```