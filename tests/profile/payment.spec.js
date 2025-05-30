 import { test  } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const HeaderPage = require('../../pages/HeaderPage');
const PaymentPage = require('../../pages/PaymentPage');




test(' Assinatura ', async ({ page }) => {
  await page.goto('/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);
  const paymentPage = new PaymentPage(page);

  
  

  await loginPage.registrationLogin('hostingdazh@gmail.com', 'Dazh2020$');
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await page.waitForTimeout(3000);
  

  await paymentPage.assinaturaPremium();
  await paymentPage.botaoPagamento();
  await paymentPage.botaoCartao();
  await page.waitForTimeout(9000);
  await paymentPage.botaoPagamentoCartao();
  await page.waitForTimeout(3000);
 
  
  




  
 
  



});