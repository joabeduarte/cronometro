const minuto = document.querySelector(".min");
const segundo = document.querySelector(".seg");
const milesimo = document.querySelector(".mil");

const btnIniciar = document.querySelector(".iniciar");
const btnPausar = document.querySelector(".pausar");

btnIniciar.addEventListener("click", iniciar);
btnPausar.addEventListener("click", pausar);
btnPausar.addEventListener("dblclick", resetar);

let min = 0;
let seg = 0;
let mil = 0;
let cronometro;

function iniciar() {
  cronometro = setInterval(() => {
    milesimo.innerText = mil.toString().padStart(2, "0");
    segundo.innerText = seg.toString().padStart(2, "0");
    minuto.innerText = min.toString().padStart(2, "0");

    mil++;

    if (mil >= 100) {
      mil = 0;
      seg++;
    }
    if (seg >= 60) {
      seg = 0;
      min++;
    }
  }, 10);
  btnIniciar.setAttribute("disabled", "");
}

function pausar() {
  clearInterval(cronometro);
  btnIniciar.removeAttribute("disabled");
}

function resetar() {
  min = 0;
  seg = 0;
  mil = 0;
  milesimo.innerText = mil.toString().padStart(2, "0");
  segundo.innerText = seg.toString().padStart(2, "0");
  minuto.innerText = min.toString().padStart(2, "0");
}
