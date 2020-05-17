window.addEventListener('load',start);

var valueR = document.querySelector('#red');
valueR.value = 0;

var valueG = document.querySelector('#green');
valueG.value = 0;

var valueB = document.querySelector('#blue');
valueB.value = 0;

var caixaCor = document.querySelector('#caixaColor');

function start() {
  criarEvento();  
}

function criarEvento() {
  function adicionarValor() {
    function mudarCor(red,green,blue){
      var rgb = 'rgb('+red.value+','+green.value+','+blue.value+')';
      caixaCor.style.background = rgb;
    }
    var inputValorR = document.querySelector('#valueR');
    inputValorR.value = valueR.value;

    var inputValorG = document.querySelector('#valueG');
    inputValorG.value = valueG.value;

    var inputValorB = document.querySelector('#valueB');
    inputValorB.value = valueB.value;

    mudarCor(inputValorR,inputValorG,inputValorB);
    
    
      
  }

  valueR.addEventListener('input', adicionarValor);
  valueG.addEventListener('input', adicionarValor);
  valueB.addEventListener('input', adicionarValor);
  adicionarValor();
}