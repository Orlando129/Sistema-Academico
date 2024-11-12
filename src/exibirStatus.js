function exibirStatus(media) {
    if (media < 4.0) {
        return 'Reprovado por média';
    } else if (media >= 6.0) {
        return 'Aprovado por média';
    } else {
        return 'Aguardando a final';
    }
}

module.exports = exibirStatus
