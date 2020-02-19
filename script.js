let date; 
let hours;
let minutes;
let seconds;
let myTimer;

const cHours = document.querySelector('.hours');
const cMinutes = document.querySelector('.minutes');
const cSeconds = document.querySelector('.seconds');

const ponteiroHoras = document.querySelector('.ponteiroHoras');
const ponteiroMinutos = document.querySelector('.ponteiroMinutos');
const ponteiroSegundos = document.querySelector('.ponteiroSegundos');

function funciona(){
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
	cHours.textContent = 'Horas: ' + hours;
  cMinutes.textContent = 'Minutos: ' + minutes;
  cSeconds.innerHTML = 'Segundos: ' + seconds;
  
  let segundosGraus = seconds * 6;
  ponteiroSegundos.style.transform = "rotate(" + segundosGraus + "deg)";
  
  let minutosGraus = minutes * 6;
  ponteiroMinutos.style.transform = "rotate(" + minutosGraus + "deg)";
  
  let horasGraus = (hours/2) * 6;
  ponteiroHoras.style.transform = "rotate(" + horasGraus + "deg)";
  
};

myTimer = setInterval(funciona, 1000);