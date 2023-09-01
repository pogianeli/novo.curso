document.querySelector('input[type=tel]');
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}
document.querySelector('#som_tecla_clap')
document.querySelector('#som_tecla_clap').play() 
const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);
const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {

  const tecla = listaDeTeclas[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}