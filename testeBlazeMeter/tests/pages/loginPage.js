import { expect } from '@playwright/test';
import { LoginPage } from '../elements/elements';
import { faker } from '@faker-js/faker';
const loginPage = new LoginPage();
const usuarioNaoCadastrado = faker.random.alpha(20);
const usuario = loginPage.nomeUsuario;
const senha = loginPage.senhaUsuario;
const senhaInvalida = faker.internet.password();

export class t2 {

    async ct04(page) {
        await page.click(loginPage.botaoLogin);
        await page.fill(loginPage.campoUsername, usuario);
        await page.fill(loginPage.campoSenha, senha);
        await page.click(loginPage.botaoLogar);
      
        // Aguarda o elemento contendo a mensagem de boas-vindas estar presente na página
        await page.waitForSelector(loginPage.localizarWelcome);
      
        // Verifique se o elemento de boas-vindas contém a mensagem de boas-vindas esperada
        await expect(page.locator(loginPage.localizarWelcome)).toHaveText(`Welcome ${usuario}`);
      }
      

    async ct05(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(loginPage.botaoLogin);
            await page.fill(loginPage.campoUsername, usuarioNaoCadastrado);
            await page.fill(loginPage.campoSenha, senha);
            await page.click(loginPage.botaoLogar);
            // Obter a mensagem do diálogo
            const dialog = await dialogPromise;
            const dialogMessage = dialog.message();
            // Validar a mensagem do diálogo
            expect(dialogMessage).toContain('User does not exist.');
        } catch (error) {
            // Tratar exceções e fornecer uma mensagem de erro personalizada
            throw new Error(`Erro no teste: ${error.message}`);
        }
    }

    async ct06(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(loginPage.botaoLogin);
            await page.fill(loginPage.campoUsername, usuario);
            await page.fill(loginPage.campoSenha, senhaInvalida);
            await page.click(loginPage.botaoLogar);
            // Obter a mensagem do diálogo
            const dialog = await dialogPromise;
            const dialogMessage = dialog.message();
            // Validar a mensagem do diálogo
            expect(dialogMessage).toContain('Wrong password.');
        } catch (error) {
            // Tratar exceções e fornecer uma mensagem de erro personalizada
            throw new Error(`Erro no teste: ${error.message}`);
        }
    }
    async ct07(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(loginPage.botaoLogin);
            await page.fill(loginPage.campoUsername, '');
            await page.fill(loginPage.campoSenha, senhaInvalida);
            await page.click(loginPage.botaoLogar);
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

    async ct08(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(loginPage.botaoLogin);
            await page.fill(loginPage.campoUsername, usuario);
            await page.fill(loginPage.campoSenha, '');
            await page.click(loginPage.botaoLogar);
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
    async ct09(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(loginPage.botaoLogin);
            await page.fill(loginPage.campoUsername, '');
            await page.fill(loginPage.campoSenha, '');
            await page.click(loginPage.botaoLogar);
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
    async ct10(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            await page.click(loginPage.botaoLogin);
            await page.fill(loginPage.campoUsername, 'teste espaço');
            await page.fill(loginPage.campoSenha, 'teste espaço');
            await page.click(loginPage.botaoLogar);
            // Obter a mensagem do diálogo
            const dialog = await dialogPromise;
            const dialogMessage = dialog.message();
            // Validar a mensagem do diálogo
            expect(dialogMessage).toContain('User does not exist.');
        } catch (error) {
            // Tratar exceções e fornecer uma mensagem de erro personalizada
            throw new Error(`Erro no teste: ${error.message}`);
        }
    }
}

