const ano = document.getElementById('ano');
const mes = document.getElementById('mes');
const dia = document.getElementById('dia');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milesimos = document.getElementById('milesimos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let a = dateToday.getFullYear();
    let m = dateToday.getMonth() + 1;
    let d = dateToday.getDate();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let mill = dateToday.getMilliseconds();

    if (a < 10) a = '0' + a;

    if (m < 10) m = '0' + m;

    if (d < 10) d = '0' + d;
    
    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    if (mill < 10) mill = '0' + mill

    ano.textContent = a;
    mes.textContent = m;
    dia.textContent = d;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milesimos.textContent = mill;
})