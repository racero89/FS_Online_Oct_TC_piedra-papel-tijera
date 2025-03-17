const opciones = ["piedra", "papel", "tijera"];

const resultados = document.getElementById("resultados");

const PuntuaUsuario = document.getElementById("contador-usuario");

const PuntuaOrdenador = document.getElementById("contador-ordenador");

const botones = document.querySelectorAll(".boton-jugada");

const obtenerResultado = document.getElementById("Resultado");

const muestraResultado = document.getElementById("Muestra resultado");
const actualizaPuntuacion = document.getElementById("Actualiza funcion");

let PuntosUsuario = 0;
let puntosOrdenador = 0;

let jugada = ["jugadaUsuario"];
let ordenador = ["juegaOrdenador"];

function obtenerResultado(jugadaUsuario, juegaOrdenador) {
  if (jugadaUsuario === juegaOrdenador) return "Empate";
  if (
    (jugadaUsuario === "piedra" && juegaOrdenador === "tijera") ||
    (jugadaUsuario == "papel" && juegaOrdenador === "piedra") ||
    (jugadaUsuario == "tijera" && juegaOrdenador === "papel")
  ) {
    return "Ganste";
  }
  return "Perdiste";
}

function muestraResultado() {}

function actualizaPuntuacion(resultados) {
  if (resultados === "ganaste") PuntosUsuario++;
  else if (resultados === "perdiste") puntosOrdenador++;
}
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const jugadaUsuario = boton.getAttribute("dato-jugada");
    const juegaOrdenador =
      opciones[Math.floor(Math.random() * opciones.length)];

    const resultados = obtenerResultado(jugadaUsuario, juegaOrdenador);
  });
});
