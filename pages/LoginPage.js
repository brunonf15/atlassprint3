class LoginPage{
    constructor(page){
        this.page = page;
    }

    async clickCreateAccountText(){
        const createText = await this.page.getByText('Criar');
        await createText.click();
    }

    async acceptAllButton(){
        const acceptButton = await this.page.getByRole('button', { name: 'Aceite tudo' });
        await acceptButton.click();
    }
    
    async fillNameEmailPassword(nome, email, senha){
        const nameField = await this.page.locator('#GEN_INPUT_ACCOUNT_CREATE_FIRST_NAME');
        await nameField.fill(nome);

        const emailField = await this.page.locator('#GEN_INPUT_ACCOUNT_CREATE_EMAIL');
        await emailField.fill(email);

        const passwordField = await this.page.locator('#GEN_INPUT_ACCOUNT_CREATE_PASSWORD');
        await passwordField.fill(senha);
    }

    async selectLanguage(){
        const languageDropdown = await this.page.getByRole('combobox');
        await languageDropdown.selectOption('PT');
    }

    async clickCreateAccountButton(){
        const createButton = await this.page.getByRole('button', { name: 'Criar a conta' });
        await createButton.click();
    }

    async acceptTerms(){
        const termsCheckbox = await this.page.locator('#checkbox');
        await termsCheckbox.click();
    }

    async registrationLogin(email, senha){
        const emailField = await this.page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL');
        await emailField.fill(email);

        const passwordField = await this.page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD');
        await passwordField.fill(senha);
    }

    async clickLoginButton(){
        const clickLoginButton = await this.page.getByRole('button', { name: 'Log in' });
        await clickLoginButton.click();
    }
}

module.exports = LoginPage;