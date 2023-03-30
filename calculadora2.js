let operandoA;
let operandoB;
let operacion;

window.addEventListener("load", init = () => {
    
    let resultado = document.getElementById('resultado');
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicar');
    let division = document.getElementById('dividir');
    let igual = document.getElementById('igual');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');

    uno.addEventListener("click", uno = () =>{
        resultado.textContent = resultado.textContent  + "1";
    })
    dos.addEventListener("click", dos = () =>{
        resultado.textContent = resultado.textContent  + "2";
    })
    tres.addEventListener("click", tres = () =>{
        resultado.textContent = resultado.textContent  + "3";
    })
    cuatro.addEventListener("click", cuatro = () =>{
        resultado.textContent = resultado.textContent  + "4";
    })
    cinco.addEventListener("click", cinco = () =>{
        resultado.textContent = resultado.textContent  + "5";
    })
    seis.addEventListener("click", seis = () =>{
        resultado.textContent = resultado.textContent  + "6";
    })
    siete.addEventListener("click", siete = () =>{
        resultado.textContent = resultado.textContent  + "7";
    })
    ocho.addEventListener("click", ocho = () =>{
        resultado.textContent = resultado.textContent  + "8";
    })
    nueve.addEventListener("click", nueve = () =>{
        resultado.textContent = resultado.textContent  + "9";
    })
    cero.addEventListener("click", cero = () =>{
        resultado.textContent = resultado.textContent  + "0";
    })
    reset.addEventListener("click", reset = () =>{
        resetear();
    }) 

    suma.addEventListener('click', suma = () => {
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    })

    resta.addEventListener('click', resta = () => {
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    })

    multiplicacion.addEventListener('click', multiplicacion = () => {
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    })
    division.addEventListener('click', division = () => {
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    })

    igual.addEventListener('click', igual = () => {
        operandoB = resultado.textContent;
        resolver();
    })



}) 

    function limpiar(){
        resultado.textContent = "";
      }
      function resetear(){
        resultado.textContent = "";
        operandoA = 0;
        operandoB = 0;
        operacion = "";
      }

      function resolver(){
        let res = 0;
        switch(operacion){
          case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
          case "-":
              res = parseFloat(operandoA) - parseFloat(operandoB);
              break;
          case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
          case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
        }
        resetear();
        resultado.textContent = res;
      }

