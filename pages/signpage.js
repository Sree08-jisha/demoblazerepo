export class Signup{

  constructor(page){
  this.page = page
  this.usernamefield= page.locator('#sign-username')
  this.passwordfield= page.locator('#sign-password')
  this.signupbutton = page.locator('//button[text()="Sign up"]')
  this.closebutton = page.locator('//*[@id="signInModal"]/div/div/div[3]/button[1]')

}

async openApplication(){
    await this.page.goto("https://www.demoblaze.com/")
    await this.page.locator('//a[@id="signin2"]').click()
}

async loginDetailsSignup(username,password){
    await this.usernamefield.fill(username)
    await this.passwordfield.fill(password)

      this.page.on('dialog', async dialog => {
        await dialog.accept()
    })
    await this.signupbutton.click()

}


async loginDetailsClose(username,password){
    await this.usernamefield.fill(username)
    await this.passwordfield.fill(password)

     
    await this.closebutton.click()

}


}