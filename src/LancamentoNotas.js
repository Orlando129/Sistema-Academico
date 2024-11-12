function lancarNota(nota1, nota2){
    const validarNota = (nota) =>{
        return typeof nota === 'number' && nota >= 0.0 && nota <= 10.0 && /^\d+(\.\d)?$/.test(nota.toFixed(1));
    };
    
    if (!validarNota(nota1)) {
        throw new Error("A nota de 1UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
    }
    if (!validarNota(nota2)) {
        throw new Error("A nota de 2UP deve ser um número entre 0.0 e 10.0 com uma casa decimal.");
    }

    return {nota1: nota1.toFixed(1), nota2: nota2.toFixed(1)};
}
module.exports = lancarNota;