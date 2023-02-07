// Resolva o Exercício de Fixação!
function verificaMaioridade(nome, nascimento, anoAtual){
    
    const maiorDeIdade = anoAtual - nascimento >= 18

    const frase4 = `${nome} é maior de idade? ${maiorDeIdade}`
    return frase4
}

console.log(verificaMaioridade('Henrique', 2000, 2023))
console.log(verificaMaioridade('Henri', 2009, 2023))
console.log(verificaMaioridade('Henrique', 1998, 2023))
console.log(verificaMaioridade('Henri', 1567, 900))