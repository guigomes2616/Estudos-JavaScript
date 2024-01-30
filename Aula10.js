function gerar(){ //Chama a função gerar

    let nume = document.getElementById('txtnum') //let nume acessa o input "txtnum"
    let tabu = document.getElementById('seltab') //let tabu acessa o select "seltab"

    let n = Number(nume.value) //let n vai receber o valor inserido em nume
    let c = 1 // let c será o contador, valendo 1

    if(nume.value.length == 0){ // Se nume for um valor igual a 0...

        alert('[ERRO] Por favor, digite um número!')

    }else{ //Se não

        tabu.innerHTML = '' // Serve para limpar a lista em cada operação

        while(c<=10){ //Enquanto c for menor que 10...

            let lista = document.createElement('option') //let lista cria um option
            lista.text = `${n} x ${c} = ${n*c}` //lista vai receber o texto da multiplicação
            tabu.appendChild(lista) //Insere automaticamente a lista em tabu(select)

            lista.value = `tabu${c}` //Serve para manipular uma conta em especifico
            c++ //Incremento para pular o contador
        }
    }
}