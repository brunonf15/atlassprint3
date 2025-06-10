import { test } from "@playwright/test";
const LoginPage = require("../../pages/LoginPage");
const PaymentPage = require("../../pages/PaymentPage");

/**
 * Fluxo de assinatura premium (feature instável, teste pulado):
 * 1. Acessa a página de login em pt_br.
 * 2. Realiza login com credenciais válidas.
 * 3. Aceita cookies e acessa a área de pagamento.
 * 4. Seleciona assinatura premium e método de pagamento.
 * 5. Realiza tentativa de pagamento com cartão.
 */
test.skip("Realizar fluxo completo de assinatura premium e pagamento com cartão", async ({ page }) => {
  await page.goto("account_login?lang=pt_br");
  const loginPage = new LoginPage(page);
  const paymentPage = new PaymentPage(page);

  // Login e navegação
  await loginPage.registrationLogin("hostingdazh@gmail.com", "Dazh2020$");
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await page.waitForTimeout(3000);

  // Fluxo de assinatura e pagamento
  await paymentPage.assinaturaPremium();
  await paymentPage.botaoPagamento();
  await paymentPage.botaoCartao();
  await page.waitForTimeout(9000);
  await paymentPage.botaoPagamentoCartao();
  await page.waitForTimeout(3000);
});
