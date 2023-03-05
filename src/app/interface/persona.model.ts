export class personamodel{
    id?: number;
    nombre: String;
    apellido: String;
    apodo: String;
    img: String;
    abouttext: String;
    seniority: String;

    constructor(nombre: String, apellido: String, apodo: String, img: String, abouttext: String, seniority: String ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.apodo = apodo;
        this.img = img;
        this.abouttext = abouttext;
        this.seniority = seniority;
    }
}