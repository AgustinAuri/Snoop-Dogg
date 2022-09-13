
const resta = (turnoDelPaciente, totalDeTurnos) => turnoDelPaciente - totalDeTurnos ;
const espera = x => x * 15;

let turnoPaciente = parseInt(prompt("ingrese su turno"));
let turnos = parseInt(prompt("ingrerse total de turnos"));

let tiempoDeEspera = espera(resta(turnos, turnoPaciente));
alert(tiempoDeEspera + " minutos de espera")
