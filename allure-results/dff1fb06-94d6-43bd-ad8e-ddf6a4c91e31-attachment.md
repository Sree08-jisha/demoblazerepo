# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addtocart.spec.js >> Adding product to cart
- Location: tests\addtocart.spec.js:4:1

# Error details

```
TypeError: _loginpage.Addtocart is not a constructor
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { Addtocart } from '../pages/loginpage'
  3  | 
  4  | test('Adding product to cart',async ({page})=>{
  5  | 
> 6  | const addtocart = new Addtocart(page)
     |                   ^ TypeError: _loginpage.Addtocart is not a constructor
  7  | await addtocart.product()
  8  | 
  9  | 
  10 | 
  11 | })
```