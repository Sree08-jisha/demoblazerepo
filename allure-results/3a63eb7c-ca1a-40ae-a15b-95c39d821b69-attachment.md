# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addtocart.spec.js >> Adding product to cart
- Location: tests\addtocart.spec.js:5:1

# Error details

```
TypeError: _loginpage.Addtocart is not a constructor
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { Addtocart } from '../pages/loginpage'
  3  | import validlogindata from "../utils/addtocart.json" with {type:'json'}
  4  | 
  5  | test('Adding product to cart',async ({page})=>{
  6  | 
> 7  | const addtocart = new Addtocart(page)
     |                   ^ TypeError: _loginpage.Addtocart is not a constructor
  8  | 
  9  | const usernamefield = validlogindata[0].username
  10 | const passwordfield = validlogindata[0].password
  11 | 
  12 | 
  13 | await addtocart.openApplication()
  14 | await addtocart.openLoginDetails(usernamefield,passwordfield)
  15 | 
  16 | await addtocart.product()
  17 | 
  18 | 
  19 | 
  20 | })
```