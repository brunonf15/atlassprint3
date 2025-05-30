 import { test  } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const HeaderPage = require('../../pages/HeaderPage');
const ProfilePage = require('../../pages/ProfilePage');


test(' Alterar dados do perfil ', async ({ page }) => {
  await page.goto('/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);
  const profilePage = new ProfilePage(page);
  

  await loginPage.registrationLogin('hostingdazh@gmail.com', 'Dazh2020$');
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await headerPage.assertMenuIsVisible();

  await profilePage.botaoAttPerfil();
  await page.waitForTimeout(3000);
  await profilePage.selecionarNivelPerfil('Iniciante');
  await profilePage.selecionarProfissaoAtual('Atendente');
  await profilePage.selecionarTelefone('11993638327');
  


  
 
  



});