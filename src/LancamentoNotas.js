function lancarNota(nota1, nota2){
    const validarNota = (nota) =>{
        const regex = /^\d+(\.\d{1})?$/; // Aceita no máximo uma casa decimal
        return typeof nota === 'number' && !isNaN(nota) && nota >= 0.0 && nota <= 10.0 && regex.test(nota.toString());
    };
    
    if (!validarNota(nota1)) {
        if (typeof nota1 !== 'number') {
          throw new Error("Entradas devem ser numéricas");
        }
        throw new Error("Nota de 1UP inválida");
      }
    
      if (!validarNota(nota2)) {
        if (typeof nota2 !== 'number') {
          throw new Error("Entradas devem ser numéricas");
        }
        throw new Error("Nota de 2UP inválida");
      }
    
      // Se as notas forem válidas, retorna as notas salvas
      return { nota1, nota2, mensagem: "Notas salvas com sucesso" };
    
}
module.exports = lancarNota;