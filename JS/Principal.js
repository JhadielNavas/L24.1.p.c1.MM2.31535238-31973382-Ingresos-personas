import CL_Personas from "./CL_Personas.js";
import CL_Operaciones from "./CL_Operaciones.js";

let perso1 = new CL_Personas("Mary", "F", 150);
let perso2 = new CL_Personas("Jose", "M", 135);
let perso3 = new CL_Personas("Carlos", "M", 160);
let perso4 = new CL_Personas("Pedro", "M", 75);
let perso5 = new CL_Personas("Rosa", "F", 120);
let perso6 = new CL_Personas("Carmen", "F", 120);

let operacion = new CL_Operaciones();
operacion.procesarPersonas(perso1);
operacion.procesarPersonas(perso2);
operacion.procesarPersonas(perso3);
operacion.procesarPersonas(perso4);
operacion.procesarPersonas(perso5);
operacion.procesarPersonas(perso6);

let salida = document.getElementById("salida");

salida.innerHTML = `
Promedio de ingreso de las mujeres: ${operacion.calcularProIngresosM()}<br>
Nombre de la persona con mayor ingreso: ${operacion.reporteNombre()} con un ingreso de: ${operacion.reporteMayor()}$`