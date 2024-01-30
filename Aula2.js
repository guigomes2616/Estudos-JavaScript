// Number.parseInt ou Float (n)- Converte se String para Number
//var n1 = Number.parseFloat(window.prompt('Digite um número:'))
//var n2 = Number.parseFloat (window.prompt('Digite outro número:'))
        
var n1 = Number(window.prompt('Digite um número: ')) // Number(n) Converte de String para Number (melhor forma)
var n2 = Number(window.prompt('Digite outro número: ')) //String(n) Converte de Number para String

var soma = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`) // ${n} Usa a concatenação (Template String), melhor que o "+"