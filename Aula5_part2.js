function somar(){ // Chama a função "somar"

    //Declarando variaveis

    var n1 = document.getElementById('n1') //O objeto n1 vai acessar um elemento com o ID "n1"
    var n2 = document.querySelector('input#n2') // O objeto n2 vai acessar o elemento css "input" com o ID "n2"
    var res = document.getElementById('res') // O objeto res vai acessar o elemento com o ID "res"

    //Parte da Operação

    var num1 = Number(n1.value) //Varivael num1 vai ter o valor de Number (vai receber o valor inserido de n1)
    var num2 = Number(n2.value) //Varivael num2 vai ter o valor de Number (vai receber o valor inserido de n2)
    var soma = num1 + num2 // A variavel soma vai receber a soma entre num1 e num2

   res.innerHTML = `A soma entre ${num1} e ${num2} é igual à <strong>${soma}</strong>` // O conteúdo da DIV recebera esse novo conteúdo
}