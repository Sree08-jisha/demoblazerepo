import{test,expect} from '@playwright/test'
import { Addtocart } from '../pages/addtocart'
import validlogindata from "../utils/addtocart.json" with {type:'json'}

test('Adding product to cart',async ({page})=>{

const addtocart = new Addtocart(page)

const usernamefield = validlogindata[0].username
const passwordfield = validlogindata[0].password


await addtocart.openApplication()
await addtocart.openLoginDetails(usernamefield,passwordfield)

await addtocart.product()



})


test('Placing the order from phone section', async({page})=>{

  const addtocart = new Addtocart(page)
  
  const usernamefield = validlogindata[0].username
  const passwordfield = validlogindata[0].password



  const namefield = validlogindata[1].name
  const countryfield = validlogindata[1].country
  const cityfield = validlogindata[1].city
  const creditcard = validlogindata[1].creditcard
  const monthfield = validlogindata[1].month
  const yearfield = validlogindata[1].year

   await addtocart.openApplication()
   await addtocart.openLoginDetails(usernamefield,passwordfield)

   await addtocart.mobileproduct()
   await addtocart.placeorderdetails(namefield,countryfield,cityfield,creditcard,monthfield,yearfield)


})

test.only('Placing the order from monitor section ', async({page})=>{

  const addtocart = new Addtocart(page)
  
  const usernamefield = validlogindata[0].username
  const passwordfield = validlogindata[0].password



  const namefield = validlogindata[1].name
  const countryfield = validlogindata[1].country
  const cityfield = validlogindata[1].city
  const creditcard = validlogindata[1].creditcard
  const monthfield = validlogindata[1].month
  const yearfield = validlogindata[1].year

   await addtocart.openApplication()
   await addtocart.openLoginDetails(usernamefield,passwordfield)

   await addtocart.monitorproduct()
   await addtocart.placeorderdetails(namefield,countryfield,cityfield,creditcard,monthfield,yearfield)



})