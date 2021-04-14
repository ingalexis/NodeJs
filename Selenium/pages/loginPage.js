'use strict'
const BasePage = require('./basePage');

const PAGE_IDENTIFIER = '#login-container';
const PAGE_USEREMAIL_TEXTBOX = '#emailId';
const PAGE_USERPASSWORD_TEXTBOX = '#passwordId';
const PAGE_LOGIN_BUTTON = '#signInButtonId';
const PAGE_LOGIN_HEADER = '#login-header';
const PAGE_EMAIL_LABEL = '#email-label';
const PAGE_PASSWORD_LABEL = '#password-label';

class LoginPage extends BasePage {

    constructor(driver){
        super(driver, PAGE_IDENTIFIER);
    }
    
    async isPageLoaded() {
        return await this.exists();
    }

    async getUserEmailTextBox() {
        let email = await this.findElementByCss(PAGE_USEREMAIL_TEXTBOX);
        return email;
    }

    async getUserPasswordTextBox() {
        let password = await this.findElementByCss(PAGE_USERPASSWORD_TEXTBOX);
        return password;
    }

    async getSignInButton() {
        let signInButton = await this.findElementByCss(PAGE_LOGIN_BUTTON);
        return signInButton;
    }

    async getLoginHeader() {
        let loginHeader = await this.findElementByCss(PAGE_LOGIN_HEADER);
        return loginHeader;
    }

    async getEmailLabel() {
        let emailLabel = await this.findElementByCss(PAGE_EMAIL_LABEL);
        return emailLabel;
    }

    async getPasswordLabel() {
        let passwordLabel = await this.findElementByCss(PAGE_PASSWORD_LABEL);
        return passwordLabel;
    }

    async signIn() {
        let loginButton = await this.findElementByCss(PAGE_LOGIN_BUTTON);
        loginButton.click();
    }

    async enterUserEmail(emailText) {
        const emailTextBox = await this.getUserEmailTextBox();
        emailTextBox.sendKeys(emailText);
    }

    async enterUserPassword(passwordText) {
        const userPasswordTextBox = await this.getUserPasswordTextBox();
        userPasswordTextBox.sendKeys(passwordText);
    }
}

module.exports = LoginPage;