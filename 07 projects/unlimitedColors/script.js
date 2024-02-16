const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
let start = () => {
  let changeColor = () => {
    document.body.style.backgroundColor = randomColor();
  };
  if (!interval) {
    interval = setInterval(changeColor, 1000);
  }
};

function stop() {
  clearInterval(interval);
  interval = null;
}

document.getElementById('start').addEventListener('click', start);

document.getElementById('stop').addEventListener('click', stop);
