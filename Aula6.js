function calcular(){ // Chamo a função calcular

var txtv = document.querySelector('input#txtvel') //Cria o objeto TXTV para acessar o elemento css com o ID "txtvel" (o valor que será inserido no input)
var vel = Number(txtv.value) // Valor tipo NUMBER, inserido em TXTV
var res = document.querySelector('div#res') // Objeto RES vai acessar o elemento css com o id "res" (Onde aparecera a resposta)

res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>` //Vai imprimir o texto, puxando a variavel "vel"

if(vel>60){ // SE a vel (velocidade) for maior que 60...

    res.innerHTML += '<p> Você está <strong>MULTADO</strong> por excesso de velocidade!</p>' // Imprime esse texto na tela (multado)

}else{ // Se não...

res.innerHTML += '<p>Dirija sempre com cinto de segurança!</p' // Imprime esse texto na tela (+= significa que vai aparecer mais um texto com os demais, se fosse igual, os textos anteriores iriam sumir)
}}