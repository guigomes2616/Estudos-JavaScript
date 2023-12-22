var a = document.getElementById('area') //O obejto (variavel) "a" vai acessar os elemento com o ID "area"...

a.addEventListener('click', clicar) //Adiciona o evento "click" e chamo de "clicar" 
a.addEventListener('mouseenter', entrar) //Adiciona o evento "mouseenter" e chamo de "entrar" 
a.addEventListener('mouseout', sair) //Adiciona o evento "mouseout" e chamo de "sair" 

function clicar(){ // Chamo a função clicar...

    a.innerText = 'Clicou!'// E quando clicar, o conteudo d ID irá mudar

    a.style.background = 'red' // E a cor de fundo irá mudar
}

function entrar(){ // Chamo a função entrar...

    a.innerText = 'Entrou!' // E quando passar o mouse, o conteudo d ID irá mudar
}

function sair(){ // Chamo a função sair...
    
    a.innerText = 'Saiu!' // E quando sair com o mouse, o conteudo d ID irá mudar

    a.style.background = 'green' //E a cor irá mudar
}