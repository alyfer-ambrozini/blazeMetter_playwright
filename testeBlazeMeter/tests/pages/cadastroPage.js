import { expect } from '@playwright/test';
import { LoginPage, SignUpPage } from '../elements/elements';
import { faker } from '@faker-js/faker';
const signUpPage = new SignUpPage();
const loginPage = new LoginPage();
const novoUsuario = faker.internet.userName();
const novaSenha = faker.internet.password();
const usuarioJaCadastrado = loginPage.nomeUsuario;

export class t1 {
    async ct01(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(signUpPage.botaoSignUp);
            await page.fill(signUpPage.campoUsername, novoUsuario);
            await page.fill(signUpPage.campoSenha, novaSenha);
            await page.click(signUpPage.botaoCadasatrar);
            // Obter a mensagem do diálogo
            const dialog = await dialogPromise;
            const dialogMessage = dialog.message();
            // Validar a mensagem do diálogo
            expect(dialogMessage).toContain('Sign up successful.');
        } catch (error) {
            // Tratar exceções e fornecer uma mensagem de erro personalizada
            throw new Error(`Erro no teste: ${error.message}`);
        }
    }
    async ct02(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(signUpPage.botaoSignUp);
            await page.fill(signUpPage.campoUsername, usuarioJaCadastrado);
            await page.fill(signUpPage.campoSenha, novaSenha);
            await page.click(signUpPage.botaoCadasatrar);
            // Obter a mensagem do diálogo
            const dialog = await dialogPromise;
            const dialogMessage = dialog.message();
            // Validar a mensagem do diálogo
            expect(dialogMessage).toContain('This user already exist.');
        } catch (error) {
            // Tratar exceções e fornecer uma mensagem de erro personalizada
            throw new Error(`Erro no teste: ${error.message}`);
        }
    }

    async ct03(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(signUpPage.botaoSignUp);
            await page.fill(signUpPage.campoUsername, '');
            await page.fill(signUpPage.campoSenha, '');
            await page.click(signUpPage.botaoCadasatrar);
            // Obter a mensagem do diálogo
            const dialog = await dialogPromise;
            const dialogMessage = dialog.message();
            // Validar a mensagem do diálogo
            expect(dialogMessage).toContain('Please fill out Username and Password.');
        } catch (error) {
            // Tratar exceções e fornecer uma mensagem de erro personalizada
            throw new Error(`Erro no teste: ${error.message}`);
        }
    }
}
