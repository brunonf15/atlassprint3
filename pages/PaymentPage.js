class PaymentPage {
  /**
   * @param {import('@playwright/test').Page} page - Instância da página Playwright.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Clica no botão "Experimente gratuitamente" para iniciar assinatura.
   */
  async assinaturaPremium(){
    const botaoAssinatura = await this.page.getByText('Experimente gratuitamente');
    await botaoAssinatura.click();
  }
  
  /**
   * Clica no botão de pagamento "Acesse agora por R$".
   */
  async botaoPagamento(){
    const pagamentoBotao = await this.page.getByRole('button', { name: 'Acesse agora por R$' });
    await pagamentoBotao.click();
  }

  /**
   * Seleciona a opção "Cartão Local".
   */
  async botaoCartao(){
    const cartaoBotao = await this.page.getByText('Cartão Local');
    await cartaoBotao.click();
  }

  /**
   * Seleciona o método de pagamento com cartão.
   */
  async botaoPagamentoCartao(){
    const pagamentoCartao = await this.page.getByRole('button', { name: 'Cartão pm-logo pm-logo pm-logo' }).getByRole('radio');
    await pagamentoCartao.click();
  }

}

module.exports = PaymentPage ;