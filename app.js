let numeroSecreto = 0;
let intento = 0;
//console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intento);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intento} ${(intento === 1)  ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intento++;
        limpiar();
    }
    return;
}

function limpiar() {
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto=generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiar();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar los intentos
    condicionesIniciales();
    //deshabilitar el botón nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();