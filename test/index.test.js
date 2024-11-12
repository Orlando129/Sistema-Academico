const lancarNota = require('../src/LancamentoNotas')
 
describe("Lançamento de Notas", () => {
    test("Deve retornar as notas de 1UP e 2UP para valores válidos", () => {
      const resultado = lancarNota(8.5, 7.3);
      expect(resultado).toEqual({ nota1: "8.5", nota2: "7.3" });
    });
  
    test("Deve lançar erro se a nota de 1UP não for um número válido", () => {
      expect(() => lancarNota(11.0, 8.5)).toThrow("A nota de 1UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
    });
  
    test("Deve lançar erro se a nota de 2UP não for um número válido", () => {
      expect(() => lancarNota(8.5, -1.0)).toThrow("A nota de 2UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
    });
  });