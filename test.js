const assert = require('assert');
const app = require('./index');

try {
    assert.strictEqual(typeof app, 'function');
    console.log('Testes passaram com sucesso!');
    process.exit(0);
} catch (error) {
    console.error('Falha no teste:', error);
    process.exit(1);
}