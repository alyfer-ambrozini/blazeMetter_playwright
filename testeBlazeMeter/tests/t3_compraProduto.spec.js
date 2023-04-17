import { test } from '@playwright/test';
import { t3 } from './pages/compraProdutoPage';
const teste3 = new t3();


// Agrupando os testes relacionados ao login em uma suite de testes
test.describe('Carrinho e Compras', () => {
    // Configurando o ambiente para cada teste
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('CT11 - Teste de adição de produto ao carrinho', async ({ page }) => {
       await teste3.ct11(page);
    });
    test('CT12 - Teste de checkout', async ({ page }) => {
        await teste3.ct12(page);
    });
});