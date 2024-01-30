var nome = window.prompt('Qual o seu nome?')
document.write(`Olá, ${nome}!Seu nome tem ${nome.length} letras.<br>`)
// "document.write()" Faz aparecer a mensagem na página
// "$nome.length" Conta o numero de letras

document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}.<br>`)
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}`)