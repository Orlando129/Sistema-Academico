function lancarNota(nota1, nota2){
    const validarNota = (nota) =>{
        const regex = /^\d+(\.\d{1})?$/; // Aceita no máximo uma casa decimal
        return typeof nota === 'number' && !isNaN(nota) && nota >= 0.0 && nota <= 10.0 && regex.test(nota.toString());
    };
    
    if (!validarNota(nota1)) {
        throw new Error("A nota de 1UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
    }
    if (!validarNota(nota2)) {
        throw new Error("A nota de 2UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
    }

    return {nota1, nota2};
}
module.exports = lancarNota;