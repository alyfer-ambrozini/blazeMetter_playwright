import { test } from '@playwright/test';
import { t1 } from './pages/cadastroPage';
const teste1 = new t1();

// Agrupando os testes relacionados ao cadastro em uma suite de testes
test.describe('Cadastro', () => {
    // Configurando o ambiente para cada teste
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test.describe('validar cadastro bem-sucedido', async () => {
        test('CT01 - inserir dados válidos', async ({ page }) => {
            await teste1.ct01(page);
        });
    });

    test.describe('validar cadastro mal-sucedido', async () => {
        test('CT02 - inserir usuário ja cadastrado', async ({ page }) => {
            await teste1.ct02(page);
        });
        test('CT03 - Tentativa de cadastro com campos em branco', async ({ page }) => {
            await teste1.ct03(page);
        });
    });
});