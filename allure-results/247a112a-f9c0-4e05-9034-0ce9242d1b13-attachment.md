# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpage.spec.js >> Login with valid username and invalid password
- Location: tests\loginpage.spec.js:34:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "User does not exist."
Received: "Wrong password."
```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | export class Loginpage{
  3  | 
  4  |   constructor(page){
  5  |   this.page = page
  6  |   this.usernamefield= page.locator('#loginusername')
  7  |   this.passwordfield= page.locator('#loginpassword')
  8  |   this.loginbutton = page.locator('//button[text()="Log in"]')
  9  |   this.closebutton = page.locator('//*[@id="logInModal"]/div/div/div[3]/button[1]')
  10 | 
  11 | }
  12 | 
  13 | 
  14 | async openApplication(){
  15 |    await this.page.goto("https://www.demoblaze.com/")
  16 | 
  17 |    await this.page.locator('#login2').click()
  18 | }
  19 | 
  20 | async OpenloginDetails(username,password){
  21 |   await this.usernamefield.fill(username)
  22 |   await this.passwordfield.fill(password)
  23 |   await this.loginbutton.click()
  24 | 
  25 | }
  26 | 
  27 | async Wrongusername(username,password){
  28 |   await this.usernamefield.fill(username)
  29 |   await this.passwordfield.fill(password)
  30 | 
  31 |   this.page.on('dialog', async dialog=>{
  32 |     expect(dialog.message()).toBe('User does not exist.')
  33 |     console.log(dialog.message())
  34 |     console.log(dialog.type())
  35 |     await dialog.accept()
  36 |   })
  37 |   await this.loginbutton.click()
  38 | }
  39 | 
  40 | async Wrongpassword(username,password){
  41 | 
  42 |   await this.usernamefield.fill(username)
  43 |   await this.passwordfield.fill(password)
  44 |   const dialogPromise = this.page.waitForEvent('dialog')
  45 | 
  46 |   await this.loginbutton.click()
  47 | 
  48 |   const dialog = await dialogPromise
  49 | 
  50 |   console.log(dialog.message())
  51 |   console.log(dialog.type())
  52 | 
> 53 |   expect(dialog.message()).toBe('User does not exist.')
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  54 | 
  55 |   await dialog.accept()
  56 | }
  57 | 
  58 | async Invalidcredetials(username,password){
  59 |   await this.usernamefield.fill(username)
  60 |   await this.passwordfield.fill(password)
  61 | 
  62 |     this.page.on('dialog', async dialog=>{
  63 |       expect(dialog.message()).toBe('User does not exist.')
  64 |       console.log(dialog.message())
  65 |       console.log(dialog.type())
  66 |       await dialog.accept()
  67 |     })
  68 |     await this.loginbutton.click()
  69 | 
  70 |   }
  71 | 
  72 | 
  73 | 
  74 | async Closelogindetails(username,password){
  75 |   await this.usernamefield.fill(username)
  76 |   await this.passwordfield.fill(password)
  77 |   await this.closebutton.click()
  78 | }
  79 | 
  80 | }
```