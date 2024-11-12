const calcularMedia = require("../src/calcularMedia");

describe('Testes para a função calcularMedia', () => {
   test('Notas válidas de 1UP e 2UP', () => {
      expect(calcularMedia(7.0, 8.0)).toEqual(7.5);
   }),

   test('Notas iguais de 1UP e 2UP', () => {
      expect(calcularMedia(5.0, 5.0)).toEqual(5.0);
   }),

   test('Nota mínima e máxima', () => {
      expect(calcularMedia(0.0, 10.0)).toEqual(5.0);
   }),

   test('Nota de 1UP no limite inferior', () => {
      expect(calcularMedia(0.0, 7.0)).toEqual(3.5);
   }),
   
   test('Nota de 2UP no limite superior', () => {
      expect(calcularMedia(8.0, 10.0)).toEqual(9.0);
   }),

   test('Notas inválidas (fora do intervalo)', () => {
      expect(() => calcularMedia(-1, 11.0)).toThrow();
   });
})