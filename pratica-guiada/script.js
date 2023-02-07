// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// declaração normal
function sayHello(nome){
    const frase = `Hello, ${nome}`
    console.log(frase)
}

//sayHello('zico')

// declaração função não-nomeada
const sayHello2 = function(nome){
    const frase = `Hello, ${nome}`
    console.log(frase)
}

//sayHello2('viix')

//2a prárica guiada

function operaNumber(numero){
    const ePar = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero * numero
    const frase2 = `O número ${numero} é par? ${ePar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplica}`
    return frase2
}

//console.log(operaNumber(56))
//console.log(operaNumber(6))
//console.log(operaNumber(87))

//3a prárica guiada

function loginSenha(login, senha){
    const loginArmazenado = 'henriquelbk'
    const senhaArmazenada = '12345678'

    const comparaLogin = login === loginArmazenado
    const comparaSenha = senha === senhaArmazenada

    const verificaInfos = comparaLogin && comparaSenha

    const frase3 = `Ta certo? ${verificaInfos}`
    return frase3
}

console.log(loginSenha('henriquelbk','12345678'))
console.log(loginSenha('henriquelbk','12378'))
console.log(loginSenha('henriqlbk','12345678'))



