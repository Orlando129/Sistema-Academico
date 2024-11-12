const lancarNota = require("./LancamentoNotas");

function calcularMedia(nota1, nota2) {
   const {nota1: notaValidada1, nota2: notaValidada2} = lancarNota(nota1, nota2)
   const media = (notaValidada1 + notaValidada2) / 2

   return media
}

module.exports = calcularMedia