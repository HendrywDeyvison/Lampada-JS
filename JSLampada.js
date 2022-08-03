const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const breaker = document.getElementById('breaker');
const lampada = document.getElementById('lampada');
const troca = document.getElementById('troca');


function lampadaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1
}

function lampadaOn() {
    if (!lampadaQuebrada()) {
    lampada.src = "img/ligada.jpg"
    }
}

function lampadaOff() {
    if (!lampadaQuebrada()) {
    lampada.src = "img/desligada.jpg"
    }
}

function quebraLamp(){
    lampada.src = "img/quebrada.jpg"

}

function trocarLamp(){
    if(lampadaQuebrada()){
    lampada.src = "img/desligada.jpg";
    }
}

turnOn.addEventListener('click', lampadaOn);
turnOff.addEventListener('click', lampadaOff);
breaker.addEventListener('click', quebraLamp);
lampada.addEventListener('mouseover', lampadaOn);
lampada.addEventListener('mouseleave', lampadaOff);
lampada.addEventListener('dblclick', quebraLamp)
troca.addEventListener('click', trocarLamp);