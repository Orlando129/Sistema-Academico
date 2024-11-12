const lancarNota = require('../src/LancamentoNotas')
 
describe("Lançamento de Notas", () => {
    test("Deve retornar as notas de 1UP e 2UP para valores válidos", () => {
      const resultado = lancarNota(7.5, 8.2);
      expect(resultado).toEqual({ nota1: 7.5, nota2: 8.2 });
    });
  
    test("Deve lançar erro se a nota de 1UP não for um número válido", () => {
      expect(() => lancarNota(-1.0, 8.2)).toThrow("A nota de 1UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
    });
  
    test("Deve lançar erro se a nota de 2UP não for um número válido", () => {
      expect(() => lancarNota(7.5, 12.0)).toThrow("A nota de 2UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
    });

    test("Nota de 1UP com mais de uma casa decimal", () => {
      expect(() => lancarNota(7.567, 8.2)).toThrow("A nota de 1UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
      });
    test("Nota de 2UP com mais de uma casa decimal", () => {
      expect(() => lancarNota(7.5, 8.256)).toThrow("A nota de 2UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
      });
    test('Deve lançar um erro se a entrada de 1UP não for um número', () => {
      expect(() => lancarNota("sete", 7.3)).toThrow("A nota de 1UP deve ser um número entre 0.0 e 10.0 com uma casa decimal."
        );
      });
  });