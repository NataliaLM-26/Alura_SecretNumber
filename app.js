let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

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
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al '+numeroMaximo);
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