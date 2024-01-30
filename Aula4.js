//window.document.write(window.document.URL) - Mostra o endereço da página

var corpo = document.body // Variavel CORPO para manipular o BODY
//corpo.style.background = 'black' - Muda a cor de fundo do BODY (página)

var p1 = document.getElementsByTagName('p')[1]/* 
Acessa pela TAG
Variavel p1
Acesso de document -> Pelo o Nome
('p') Identifica qual TAG
[0] Identifica a ordem de acesso */

p1.style.color = 'blue' //Muda a cor da fonte do conteudo da variavel P1

document.write('Está escrito assim: ' + p1.innerText) /*
WRITE - Imprime na tela a mensagem com a CONCATENAÇÃO (juntar)
com o texto existente em P1 (usando INNERTEXT para isso)

var d = document.getElementById('mensagem') -- Acessa a Variavel D pelo ID 'mensagem'
d.style.background = 'green' -- Muda a cor de fundo da Variavel
d.innerText = 'exemplo facil' -- Muda o texto da variavel d (jeito mais rápido e fácil)

document.getElementById('mensagem').innerText = 'exemplo dificil* -- Faz a mesma coisa, porém é mais complexa

var d = document.getElementsByName('mensagem')[0] -- Acessa pelo NAME, sendo preciso identificar a ordem []
d.innerText = 'segundo exemplo de DIV' */

var d = document.querySelector('div#mensagem') /*
Acessa usuando QUERYSELECTOR (melhor jeito)
('div#mensagem') Refere a TAG e o ID (#) ou Class (.) que você quer acessar
querySelectorAll (Plural) */
d.style.background = 'blue'


 