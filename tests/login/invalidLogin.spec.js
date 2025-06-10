import { test } from "@playwright/test";
const LoginPage = require("../../pages/LoginPage");

/**
 * Tentativa de login com credenciais inválidas:
 * 1. Acessa a página de login em pt_br.
 * 2. Tenta realizar login com usuário/senha inválidos.
 * 3. Aceita cookies e aguarda resposta de erro.
 */
test("Exibir mensagem de erro ao tentar login com credenciais inválidas", async ({ page }) => {
  await page.goto("account_login?lang=pt_br");
  const loginPage = new LoginPage(page);

  // Tentativa de login inválido
  await loginPage.registrationLogin("xavier123@gmail.com", "Xavier2025$");
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await page.waitForTimeout(3000);

  // TODO: Verificar se a mensagem de erro é exibida
});
