import { test } from "@playwright/test";
const LoginPage = require("../../pages/LoginPage");
const HeaderPage = require("../../pages/HeaderPage");

/**
 * Validação de login bem-sucedido:
 * 1. Acessa a página de login em pt_br.
 * 2. Realiza login com credenciais válidas.
 * 3. Aceita cookies e acessa o menu do usuário.
 */
test("Realizar login com credenciais válidas e acessar menu do usuário", async ({ page }) => {
  await page.goto("account_login?lang=pt_br");
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);

  // Login e navegação
  await loginPage.registrationLogin("hostingdazh@gmail.com", "Dazh2020$");
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await headerPage.menuButtonAction('click');

  // TODO: Verificar se o menu do usuário foi acessado com sucesso
});
