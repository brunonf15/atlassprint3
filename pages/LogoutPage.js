
class LogoutPage {
  constructor(page) {
    this.page = page;
  }
   async botaoSair(){
    const sairBotao = await this.page.getByRole('button', { name: 'Sair' });
    await sairBotao.click();
   }
}

module.exports = LogoutPage ;