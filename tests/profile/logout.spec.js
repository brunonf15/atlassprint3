import { test } from "@playwright/test";
const LoginPage = require("../../pages/LoginPage");
const HeaderPage = require("../../pages/HeaderPage");
const LogoutPage = require("../../pages/LogoutPage");

/**
 * Fluxo completo de login e logout:
 * 1. Acessa a página de login com idioma pt_br.
 * 2. Realiza login com credenciais válidas.
 * 3. Aceita cookies e acessa o menu do usuário.
 * 4. Realiza logout e aguarda confirmação.
 */
test("Realizar login e efetuar logout com sucesso", async ({ page }) => {
  await page.goto("account_login?lang=pt_br");
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);
  const logoutPage = new LogoutPage(page);

  // Login e navegação
  await loginPage.registrationLogin("hostingdazh@gmail.com", "Dazh2020$");
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await headerPage.menuButtonAction('click');

  // Logout
  await logoutPage.botaoSair();
  await page.waitForTimeout(7000);

  // TODO: Verificar se o logout foi bem-sucedido, por exemplo, verificando se a página de login é exibida novamente
});
