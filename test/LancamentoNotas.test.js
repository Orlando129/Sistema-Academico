const lancarNota = require('../src/LancamentoNotas');
 
describe('Testes para a função lancarNota', () => {
  test('Nota válida de 1UP e 2UP', () => {
    const resultado = lancarNota(7.5, 8.2);
    expect(resultado).toEqual({ nota1: 7.5, nota2: 8.2, mensagem: "Notas salvas com sucesso" });
  });

  test('Nota de 1UP fora do intervalo', () => {
    expect(() => lancarNota(-1.0, 8.2)).toThrow("Nota de 1UP inválida");
  });

  test('Nota de 2UP fora do intervalo', () => {
    expect(() => lancarNota(7.5, 12.0)).toThrow("Nota de 2UP inválida");
  });

  test('Nota de 1UP com mais de uma casa decimal', () => {
    expect(() => lancarNota(7.567, 8.2)).toThrow("Nota de 1UP inválida");
  });

  test('Nota de 2UP com mais de uma casa decimal', () => {
    expect(() => lancarNota(7.5, 8.256)).toThrow("Nota de 2UP inválida");
  });

  test('Entradas não numéricas', () => {
    expect(() => lancarNota("sete", 8.2)).toThrow("Entradas devem ser numéricas");
  });
});