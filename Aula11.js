let num = document.getElementById('txtnum')
let sel = document.getElementById('select')
let res = document.querySelector('div#resultado')

let valores = []

function inNum(n){

    if(Number(n)>=1 && Number(n)<=100){
        return true

    }else{
        return false

}}

function inList(n,list){

    if(list.indexOf(Number(n)) != -1){
        return true

    }else{
        return false

}}

function adicionar(){

    if(inNum(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`

        sel.appendChild(item)

        res.innerHTML = ''

    }else{
        alert('[ERRO]Valor inválido ou já inserido na lista!')
    }

num.value = ''
num.focus()

}

function finalizar(){

    if(valores.length == 0){
        alert('[ERRO]Digite os valores antes de finalizar!')

    }else{
        
        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]
        
        let soma = 0
        let media = 0

        for(let p in valores){
            soma += valores[p]

            if(valores[p]>maior){
                maior = valores[p]
            }
            
            if(valores[p]<menor){
                menor = valores[p]
            }
        }

        res.innerHTML = ''

        res.innerHTML += `<p>Ao todo, temos ${total} valores inseridos</p>`

        res.innerHTML += `<p>O maior valor inserido é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor inserido é ${menor}</p>`

        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`

        media = soma/total
        res.innerHTML += `<p>A média entre os valores é:${media}</p>`
    }

}