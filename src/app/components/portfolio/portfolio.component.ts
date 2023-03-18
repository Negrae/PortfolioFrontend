import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacioninterface } from 'src/app/interface/educacion.interface';
import { experienciainterface } from 'src/app/interface/experiencia.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  persona:any=[];
  contacto:any=[];
  educacion: educacioninterface [] = [];
  experiencia: experienciainterface [] = [];
  // miHabilidad:HabilidadI [] = [];
  // misProyectos:ProyectosI [] = [];
  // miTecnologia:TecnologiasI[] = [];

  constructor(
    private router:Router,
    private databaseService:DatabaseService
    )
    {}

  ngOnInit(): void {
    this.mostrarDatosPersona();
    this.mostrarDatosEducacion();
    this.mostrarDatosExperiencia();
    // this.mostrarDatosHabilidad();
    // this.mostrarDatosProyectos();
    // this.mostrarDatosTecnologia();
    this.mostrarDatosContacto();
    

  }

  login(){
    this.router.navigate(['/login'])
  }
  
  mostrarDatosContacto() {
    this.databaseService.obtenerContacto().subscribe(data =>{
      this.contacto=data;
    })
  }

  mostrarDatosPersona() {
    this.databaseService.obtenerPersona().subscribe(data =>{
      this.persona=data;
    })
  }

  mostrarDatosEducacion() {
    this.databaseService.obtenerDatosEducacion().subscribe(data =>{
      this.educacion=data;
    })
  }

  mostrarDatosExperiencia() {
    this.databaseService.obtenerDatosExperiencia().subscribe(experiencia =>{
      this.experiencia=experiencia;
    })
  }

//   mostrarDatosHabilidad() {
//     this.databaseService.obtenerHabilidad().subscribe(data =>{
//       this.miHabilidad=data;
//     })
// }

//   mostrarDatosProyectos() {
//   this.databaseService.obtenerDatosProyecto().subscribe(data =>{
//     this.misProyectos=data;
//   })
// }

// mostrarDatosTecnologia() {
//   this.databaseService.obtenerTecnologia().subscribe(data =>{
//     this.miTecnologia=data;
//   })

// }

}
