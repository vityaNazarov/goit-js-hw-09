function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('.start'),
  btnStop: document.querySelector('.stop'),
};

let timerId = null;

refs.btnStart.addEventListener('click', onStartRandomColor);
refs.btnStop.addEventListener('click', onStopRandomColor);

function onStartRandomColor() {
  timerId = setInterval(() => {
    const qwe = (refs.body.style.backgroundColor = getRandomHexColor());
  }, 1000);
  refs.btnStart.setAttribute('disabled', 'disabled');
  refs.btnStop.removeAttribute('disabled');
}

function onStopRandomColor() {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', 'disabled');
}
