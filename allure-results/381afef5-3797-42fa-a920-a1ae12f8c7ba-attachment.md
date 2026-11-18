# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpage.spec.js >> Login with valid username and invalid password
- Location: tests\loginpage.spec.js:34:6

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | export class Loginpage{
  2  | 
  3  |   constructor(page){
  4  |   this.page = page
  5  |   this.usernamefield= page.locator('#loginusername')
  6  |   this.passwordfield= page.locator('#loginpassword')
  7  |   this.loginbutton = page.locator('//button[text()="Log in"]')
  8  |   this.closebutton = page.locator('//*[@id="logInModal"]/div/div/div[3]/button[1]')
  9  | 
  10 | }
  11 | 
  12 | 
  13 | async openApplication(){
  14 |    await this.page.goto("https://www.demoblaze.com/")
  15 | 
  16 |    await this.page.locator('#login2').click()
  17 | }
  18 | 
  19 | async OpenloginDetails(username,password){
  20 |   await this.usernamefield.fill(username)
  21 |   await this.passwordfield.fill(password)
  22 |   await this.loginbutton.click()
  23 | 
  24 | }
  25 | 
  26 | async Wrongusername(username,password){
  27 |   await this.usernamefield.fill(username)
  28 |   await this.passwordfield.fill(password)
  29 | 
  30 |   this.page.on('dialog', async dialog=>{
  31 |     expect(dialog.message()).toBe('User does not exist.')
  32 |     console.log(dialog.message())
  33 |     console.log(dialog.type())
  34 |     await dialog.accept()
  35 |   })
  36 |   await this.loginbutton.click()
  37 | }
  38 | 
  39 | async Wrongpassword(username,password){
  40 | 
  41 |   await this.usernamefield.fill(username)
  42 |   await this.passwordfield.fill(password)
  43 |   const dialogPromise = this.page.waitForEvent('dialog')
  44 | 
  45 |   await this.loginbutton.click()
  46 | 
  47 |   const dialog = await dialogPromise
  48 | 
  49 |   console.log(dialog.message())
  50 |   console.log(dialog.type())
  51 | 
> 52 |   expect(dialog.message()).toBe('User does not exist.')
     |   ^ ReferenceError: expect is not defined
  53 | 
  54 |   await dialog.accept()
  55 | }
  56 | 
  57 | async Invalidcredetials(username,password){
  58 |   await this.usernamefield.fill(username)
  59 |   await this.passwordfield.fill(password)
  60 | 
  61 |     this.page.on('dialog', async dialog=>{
  62 |       expect(dialog.message()).toBe('User does not exist.')
  63 |       console.log(dialog.message())
  64 |       console.log(dialog.type())
  65 |       await dialog.accept()
  66 |     })
  67 |     await this.loginbutton.click()
  68 | 
  69 |   }
  70 | 
  71 | 
  72 | 
  73 | async Closelogindetails(username,password){
  74 |   await this.usernamefield.fill(username)
  75 |   await this.passwordfield.fill(password)
  76 |   await this.closebutton.click()
  77 | }
  78 | 
  79 | }
```