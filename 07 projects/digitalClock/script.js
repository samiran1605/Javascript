const tdisplay = document.getElementById('clock');

setInterval(() => {
  let ndate = new Date();
  tdisplay.innerHTML = ndate.toLocaleTimeString()
}, 1000)
