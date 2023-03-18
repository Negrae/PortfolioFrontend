import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { proyectointerface } from 'src/app/interface/proyecto.interface';

@Component({
  selector: 'app-projects-new',
  templateUrl: './projects-new.component.html',
  styleUrls: ['./projects-new.component.css']
})
export class ProjectsNewComponent implements OnInit {

  @Output() agregarProyecto:EventEmitter<proyectointerface> = new EventEmitter();
  
  nombreProyecto:string = "";
  descripcionProyecto:string = "";
  urlProyecto:string = "";
  urlImgProyecto:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarProyecto() {
    if (this.nombreProyecto.length === 0, this.descripcionProyecto.length === 0, this.urlProyecto.length === 0, this.urlImgProyecto.length === 0){
      alert("Por favor complete todos los campos");
      return 
    }
    const {nombreProyecto, descripcionProyecto, urlProyecto, urlImgProyecto} = this
    const nuevoProyecto = {nombreProyecto, descripcionProyecto, urlProyecto, urlImgProyecto}
    this.agregarProyecto.emit(nuevoProyecto);
    this.ngOnInit();
  }

  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

}
