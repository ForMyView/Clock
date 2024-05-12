const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');
const numHours = document.querySelector('.hours');
const numMinutes = document.querySelector('.minutes');


let y = 360;

clock();
function clock() {

  let time = new Date();

  let seconds = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;

  sec.style.transition = '1s linear'

  if (seconds == 0 || y > 360) {
    sec.style.transform = `rotate(${y}deg)`;
    y += 6;
  } else {
    sec.style.transform = `rotate(${seconds}deg)`;
  }

  min.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;

  numHours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  numMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

  setTimeout(() => { clock() }, 1000);
}


const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContentItem = document.querySelectorAll('.tabsContentItem');

tabsItem.forEach((el, i) => {

  el.addEventListener('click', (e) => {

    e.preventDefault();

    tabsItem.forEach((item, y) => {
      item.classList.remove('active');
      tabsContentItem[y].classList.remove('active');
    })

    el.classList.add('active');
    tabsContentItem[i].classList.add('active');
  });

});

let tabsLinkSpan = document.querySelector('.tabsLink__span');
let btn = document.querySelector('.stopwatch__btn');
let stopwatchSeconds = document.querySelector('.stopwatch__seconds');
let stopwatchMinutes = document.querySelector('.stopwatch__minutes');
let stopwatchHours = document.querySelector('.stopwatch__hours');

btn.addEventListener('click', () => {
  if (btn.innerHTML == 'start') {
    btn.innerHTML = 'stop';
    tabsLinkSpan.classList.add('active');
    start()
  }
  else if (btn.innerHTML == 'stop') {
    btn.innerHTML = 'clear';
    tabsLinkSpan.classList.remove('active');
    tabsLinkSpan.classList.add('active_clear');
  }
  else if (btn.innerHTML == 'clear') {
    btn.innerHTML = 'start';
    tabsLinkSpan.classList.remove('active_clear');
    stopwatchSeconds.innerHTML = 0;
    stopwatchMinutes.innerHTML = 0;
    stopwatchHours.innerHTML = 0;
  }
});

function start() {

  setTimeout(() => {
    if(btn.innerHTML == 'stop'){
      stopwatchSeconds.innerHTML++
      start()
    }
  }, 1000);

  if(stopwatchSeconds.innerHTML > 59){
    stopwatchSeconds.innerHTML = 0;
    stopwatchMinutes.innerHTML++;
  }
  else if(stopwatchMinutes.innerHTML > 59){
    stopwatchMinutes.innerHTML = 0;
    stopwatchHours.innerHTML++;
  }
  else if(stopwatchHours.innerHTML > 23){
    stopwatchHours.innerHTML = 0;
  }

}