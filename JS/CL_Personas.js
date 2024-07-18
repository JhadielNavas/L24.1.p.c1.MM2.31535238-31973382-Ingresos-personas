export default class CL_Personas {
    constructor(nombre, sexo, ingreso_P){
        this.nombre = nombre;
        this.sexo = sexo;
        this.ingreso_P = ingreso_P;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre (){
        return this._nombre;
    }
    set sexo(sexo){
        this._sexo = sexo;
    }
    get sexo(){
        return this._sexo;
    }
    set ingreso_P(ingreso_P){
        this._ingreso_P = ingreso_P;
    }
    get ingreso_P(){
        return this._ingreso_P;
    }
}