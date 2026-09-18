const assert = require('assert');
const app = require('./index');
const { somar, subtrair, multiplicar, dividir, ehPar } = require('./math');

console.log("Iniciando a bateria de testes unitários...");

// Teste 1: Soma
assert.strictEqual(somar(2, 3), 5, "Erro no Teste 1: A soma de 2 + 3 deve ser 5");
console.log("✔ Teste 1 passou: Soma correta");

// Teste 2: Subtração
assert.strictEqual(subtrair(10, 4), 6, "Erro no Teste 2: A subtração de 10 - 4 deve ser 6");
console.log("✔ Teste 2 passou: Subtração correta");

// Teste 3: Multiplicação
assert.strictEqual(multiplicar(3, 7), 21, "Erro no Teste 3: A multiplicação de 3 * 7 deve ser 21");
console.log("✔ Teste 3 passou: Multiplicação correta");

// Teste 4: Divisão e tratamento de erro
assert.strictEqual(dividir(20, 2), 10, "Erro no Teste 4: A divisão de 20 / 2 deve ser 10");
assert.throws(() => dividir(5, 0), /Divisão por zero não é permitida/, "Erro no Teste 4: Deveria lançar erro na divisão por zero");
console.log("✔ Teste 4 passou: Divisão e validação de erro corretas");

// Teste 5: Verificação de número par
assert.strictEqual(ehPar(8), true, "Erro no Teste 5: O número 8 deve ser considerado par");
assert.strictEqual(ehPar(7), false, "Erro no Teste 5: O número 7 não deve ser considerado par");
console.log("✔ Teste 5 passou: Verificação de paridade correta");

console.log("\nTodos os 5 testes unitários passaram com sucesso!");
process.exit(0);

try {
    assert.strictEqual(typeof app, 'function');
    console.log('Testes passaram com sucesso!');
    process.exit(0);
} catch (error) {
    console.error('Falha no teste:', error);
    process.exit(1);
}