import { test } from '@playwright/test';
import { t2 } from './pages/loginPage';
const teste2 = new t2();

// Agrupando os testes relacionados ao login em uma suite de testes
test.describe('Login', () => {
  // Configurando o ambiente para cada teste
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('validar login bem-sucedido', async () => {
    test('CT04 - inserir dados já cadastrados', async ({ page }) => {
      await teste2.ct04(page);
    });
  });
  test.describe('validar login mal-sucedido', async () => {
    test('CT05 - Tentativa de login com um nome de usuário não registrado', async ({ page }) => {
      await teste2.ct05(page);
    });

    test('CT06 - Tentativa de login com um nome de usuário válido, mas uma senha inválida', async ({ page }) => {
      await teste2.ct06(page);
    });

    test('CT07 - Tentativa de login sem preencher o campo de nome de usuário', async ({ page }) => {
      await teste2.ct07(page);
    });
    test('CT08 - Tentativa de login sem preencher o campo de senha', async ({ page }) => {
      await teste2.ct08(page);
    });
    test('CT09 - Tentativa de login sem preencher os campos de nome de usuário e senha', async ({ page }) => {
      await teste2.ct09(page);
    });
    test('CT10 - Tentativa de login com um nome de usuário e uma senha com espaços em branco', async ({ page }) => {
      await teste2.ct10(page);
    });
  });
});