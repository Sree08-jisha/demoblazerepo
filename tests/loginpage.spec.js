import { Loginpage } from "../pages/loginpage";
import{test,expect} from'@playwright/test'
import validlogindata from "../utils/logintestdata.json" with {type:'json'}



test.only('Login with valid credentials',async ({page})=>{
 
const loginpage = new Loginpage(page)

const usernamefield = validlogindata[0].username
const passwordfield = validlogindata[0].password

await loginpage.openApplication()

await loginpage.OpenloginDetails(usernamefield,passwordfield)  //here we can store in any variable it overides when we call in pagefile

})


test('Login with invalid username and valid password', async ({page})=>{
 const loginpage = new Loginpage (page)

 const usernamefield = validlogindata[1].username
 const passwordfield = validlogindata[1].password
 
await loginpage.openApplication()

await loginpage.Wrongusername(usernamefield,passwordfield)


})

test('Login with valid username and invalid password', async ({page})=>{
 const loginpage = new Loginpage (page)

 const usernamefield = validlogindata[2].username
 const passwordfield = validlogindata[2].password
 
await loginpage.openApplication()

await loginpage.Wrongpassword(usernamefield,passwordfield)


})

test('Login with invalid username and invalid password', async ({page})=>{
 const loginpage = new Loginpage (page)

 const usernamefield = validlogindata[3].username
 const passwordfield = validlogindata[3].password
 
await loginpage.openApplication()

await loginpage.Invalidcredetials(usernamefield,passwordfield)


})

test('Login with credentials and click close', async ({page})=>{
 const loginpage = new Loginpage (page)

 const usernamefield = validlogindata[0].username
 const passwordfield = validlogindata[0].password
 
await loginpage.openApplication()

await loginpage.Closelogindetails(usernamefield,passwordfield)


})

test('Login and logout',async ({page})=>{
const loginpage = new Loginpage (page)

const usernamefield = validlogindata[0].username
const passwordfield = validlogindata[0].password

await loginpage.openApplication()

await loginpage.OpenloginDetails(usernamefield,passwordfield)

await loginpage.Logout()




})
