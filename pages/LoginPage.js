class LoginPage{
    /**
     * @param {import('@playwright/test').Page} page - Instância da página Playwright.
     */
    constructor(page){
        this.page = page;
    }

    /**
     * Clica no texto "Criar" para iniciar criação de conta.
     */
    async clickCreateAccountText(){
        const createText = await this.page.getByText('Criar');
        await createText.click();
    }

    /**
     * Aceita todos os termos clicando no botão "Aceite tudo".
     */
    async acceptAllButton(){
        const acceptButton = await this.page.getByRole('button', { name: 'Aceite tudo' });
        await acceptButton.click();
    }
    
    /**
     * Preenche os campos de nome, email e senha no cadastro.
     * @param {string} nome - Nome do usuário.
     * @param {string} email - Email do usuário.
     * @param {string} senha - Senha do usuário.
     */
    async fillNameEmailPassword(nome, email, senha){
        const nameField = await this.page.locator('#GEN_INPUT_ACCOUNT_CREATE_FIRST_NAME');
        await nameField.fill(nome);

        const emailField = await this.page.locator('#GEN_INPUT_ACCOUNT_CREATE_EMAIL');
        await emailField.fill(email);

        const passwordField = await this.page.locator('#GEN_INPUT_ACCOUNT_CREATE_PASSWORD');
        await passwordField.fill(senha);
    }

    /**
     * Seleciona o idioma "PT" no dropdown de idiomas.
     */
    async selectLanguage(){
        const languageDropdown = await this.page.getByRole('combobox');
        await languageDropdown.selectOption('PT');
    }

    /**
     * Clica no botão "Criar a conta".
     */
    async clickCreateAccountButton(){
        const createButton = await this.page.getByRole('button', { name: 'Criar a conta' });
        await createButton.click();
    }

    /**
     * Aceita os termos marcando o checkbox.
     */
    async acceptTerms(){
        const termsCheckbox = await this.page.locator('#checkbox');
        await termsCheckbox.click();
    }

    /**
     * Preenche os campos de login com email e senha.
     * @param {string} email - Email do usuário.
     * @param {string} senha - Senha do usuário.
     */
    async registrationLogin(email, senha){
        const emailField = await this.page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL');
        await emailField.fill(email);

        const passwordField = await this.page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD');
        await passwordField.fill(senha);
    }

    /**
     * Clica no botão "Log in".
     */
    async clickLoginButton(){
        const clickLoginButton = await this.page.getByRole('button', { name: 'Log in' });
        await clickLoginButton.click();
    }
}

module.exports = LoginPage;