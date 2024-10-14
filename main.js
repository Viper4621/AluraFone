const listaDeTeclas = document.querySelectorAll('input[type=button]');//criando uma lista com todos input type btn
const inputTel = document.querySelector('input[type=tel]');//estamos selecionando o input do numero digitado
// criamos um variavel indice = 0 para iniciar quando for < que o tamanho da lista; incrementar +1
for (let indice = 0; indice < listaDeTeclas.length; indice++) { 
  
    const tecla = listaDeTeclas[indice];//criamos para acessar o indice da lista 
    
    tecla.onclick = function () {//quando clicado executar função
      inputTel.value = inputTel.value + tecla.value;//pegar o valor do indice e aparecer no input do visor telefone
    }
  }