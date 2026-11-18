import{test,expect} from '@playwright/test'
import {Signup} from '../pages/signpage'
import validlogindata from '../utils/signuptestdata.json' with {type: 'json'}


test('Enter data and click signup' , async({page})=>{

  const signuppage = new Signup(page)

  const usernamefield = validlogindata[0].username
  const passwordfield = validlogindata[0].password
   

  await signuppage.openApplication()

  await signuppage.loginDetailsSignup(usernamefield,passwordfield)

 
})


test.only('Enter data and click close', async({page})=>{

const signuppage = new Signup(page)

  const usernamefield = validlogindata[1].username
  const passwordfield = validlogindata[1].password
   

  await signuppage.openApplication()

  await signuppage.loginDetailsClose(usernamefield,passwordfield)


})
