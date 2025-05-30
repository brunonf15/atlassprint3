class PaymentPage {
  constructor(page) {
    this.page = page;
  }

  async assinaturaPremium(){
    const botaoAssinatura = await this.page.getByText('Experimente gratuitamente');
    await botaoAssinatura.click();
  }
  
  async botaoPagamento(){
    const pagamentoBotao = await this.page.getByRole('button', { name: 'Acesse agora por R$' });
    await pagamentoBotao.click();
  }

  async botaoCartao(){
    const cartaoBotao = await this.page.getByText('Cartão Local');
    await cartaoBotao.click();
  }

  async botaoPagamentoCartao(){
    const pagamentoCartao = await this.page.getByRole('button', { name: 'Cartão pm-logo pm-logo pm-logo' }).getByRole('radio');
    await pagamentoCartao.click();
  }

}

module.exports = PaymentPage ;