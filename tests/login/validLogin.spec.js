 import { test  } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const HeaderPage = require('../../pages/HeaderPage');

test(' Valid Login ', async ({ page }) => {
  await page.goto('/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);

  await loginPage.registrationLogin('hostingdazh@gmail.com', 'Dazh2020$');
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await headerPage.assertMenuIsVisible();

  
 
  



});