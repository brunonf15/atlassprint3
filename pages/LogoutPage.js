class LogoutPage {
  /**
   * @param {import('@playwright/test').Page} page - Instância da página Playwright.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Clica no botão "Sair" para realizar logout.
   */
   async botaoSair(){
    const sairBotao = await this.page.getByRole('button', { name: 'Sair' });
    await sairBotao.click();
   }
}

module.exports = LogoutPage ;