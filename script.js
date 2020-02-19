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
  
  let horasGraus = hoursDegrees(hours, minutes);
  ponteiroHoras.style.transform = "rotate(" + horasGraus + "deg)";
  
};

function hoursDegrees(hrs, min){
  let newHr;
  if(hrs >= 12){
    newHr = (hrs-12) + (min/60)
  }else{
    newHr = hrs + (min/60);
  }
  let degrees = newHr * 30; //30º a cada hora
  return degrees;
};

myTimer = setInterval(funciona, 1000);