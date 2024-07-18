import CL_Personas from "./CL_Personas.js";
export default class CL_Operaciones {
    constructor(){
        this.acumIM = 0;
        this.contM = 0;
        this.mayor = 0;
        this.auxNombre = 0;
    }
    procesarPersonas(personas){

        //ACUMULADOR Y CONTADOR DE MUJERES

        if(personas.sexo == "F"){
            this.acumIM = this.acumIM + personas.ingreso_P;
            this.contM = this.contM + 1;
        }

        //MONTO MAYOR Y QUIEN LO TIENE

        if(personas.ingreso_P > this.mayor){
            this.mayor = personas.ingreso_P;
            this.auxNombre = personas.nombre;
        }
    }

    calcularProIngresosM(){
        return this.acumIM / this.contM;
    }
    reporteNombre(){
        return this.auxNombre;
    }
    reporteMayor(){
        return this.mayor;
    }
}