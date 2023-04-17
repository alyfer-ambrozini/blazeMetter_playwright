import { expect } from '@playwright/test';
import { ProdutosPage } from '../elements/elements';
import { faker } from '@faker-js/faker';
const produtosPage = new ProdutosPage();
const nome = faker.name.fullName();
const pais = faker.address.country();
const cidade = faker.address.city();
const cartao = faker.finance.creditCardNumber();
const mesCartao = faker.date.month();
const anoCartao = '2050';

export class t3 {
    async ct11(page) {
        try {
            // Monitorar eventos de diálogo
            const dialogPromise = page.waitForEvent('dialog');
            page.on('dialog', dialog => {
                dialog.accept();
            });
            // Espera até que o primeiro produto da lista de laptops esteja disponível na página
            await page.waitForSelector(produtosPage.produto1);
            // Seleciona o primeiro produto da lista de laptops e clica no botão de adicionar ao carrinho
            const primeiroElemento = await page.$$(produtosPage.produto1);
            await primeiroElemento[0].click();
            await page.click(produtosPage.addCarrinho);
            // Obter a mensagem do diálogo
            const dialog = await dialogPromise;
            const dialogMessage = dialog.message();
            // Validar a mensagem do diálogo
            expect(dialogMessage).toContain('Product added');
        } catch (error) {
            // Tratar exceções e fornecer uma mensagem de erro personalizada
            throw new Error(`Erro no teste: ${error.message}`);
        }
    }
    async ct12(page) {
        // Espera até que o primeiro produto da lista de laptops esteja disponível na página
        await page.waitForSelector(produtosPage.produto1);
        // Seleciona o primeiro produto da lista de laptops e clica no botão de adicionar ao carrinho
        const primeiroElemento = await page.$$(produtosPage.produto1);
        await primeiroElemento[0].click();
        await page.click(produtosPage.addCarrinho);
        await page.click(produtosPage.botaoCarrinho);
        await page.click(produtosPage.botaoPlaceOrder);
        await page.fill(produtosPage.inputNome, nome);
        await page.fill(produtosPage.inputPais, pais);
        await page.fill(produtosPage.inputCidade, cidade);
        await page.fill(produtosPage.inputCartao, cartao);
        await page.fill(produtosPage.inputMes, mesCartao);
        await page.fill(produtosPage.inputAno, anoCartao);
        await page.click(produtosPage.botaoPurchase);
        // Valida se as informações de nome e número do cartão aparecem na mensagem de compra bem sucedida
        const mensagemCompraSucesso = await page.locator(produtosPage.localizarCompraComSucesso).innerText();
        const contemNome = mensagemCompraSucesso.includes(`Name: ${nome}`);
        const contemNumeroCartao = mensagemCompraSucesso.includes(`Card Number: ${cartao}`);
        // Verifica se as informações foram encontradas na mensagem de compra bem sucedida
        expect(contemNome).toBeTruthy();
        expect(contemNumeroCartao).toBeTruthy();
    }
}
