import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DatabaseService } from 'src/app/services/database.service';
import { personamodel } from 'src/app/interface/persona.model';
import { contactointerface } from 'src/app/interface/contacto.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  persona:any=[];
  contacto:any=[];
  // miEducacion: EstudiosI [] = [];
  // miExperiencia: ExperienciaI [] = [];
  // miHabilidad:HabilidadI [] = [];
  // misProyectos:ProyectosI [] = [];
  // miTecnologia:TecnologiasI[] = [];

  constructor(
    private router:Router,
    private userService:UserService,
    private databaseService:DatabaseService
    )
    {}

  ngOnInit(): void {
    // this.mostrarDatosPersona();
    // this.mostrarDatosEstudios();
    // this.mostrarDatosExperiencia();
    // this.mostrarDatosHabilidad();
    // this.mostrarDatosProyectos();
    // this.mostrarDatosTecnologia();
    this.mostrarDatosContacto();
    

  }

  login(){
    this.router.navigate(['/login'])
  }
  
  mostrarDatosContacto() {
    this.databaseService.obtenerDatosContacto().subscribe(data =>{
      this.contacto=data;
    })
  }

//   mostrarDatosPersona() {
//     this.databaseService.obtenerDatosPersona().subscribe(data =>{
//       this.persona=data;
//     })
//   }

//   mostrarDatosEstudios() {
//     this.databaseService.obtenerDatosEducacion().subscribe(data =>{
//       this.miEducacion=data;
//     })}

//   mostrarDatosExperiencia() {
//     this.databaseService.obtenerDatosExperiencia().subscribe(experiencia =>{
//       this.miExperiencia=experiencia;
//     })
//   }

//   mostrarDatosHabilidad() {
//     this.databaseService.obtenerDatosHabilidad().subscribe(data =>{
//       this.miHabilidad=data;
//     })
// }

//   mostrarDatosProyectos() {
//   this.databaseService.obtenerDatosProyecto().subscribe(data =>{
//     this.misProyectos=data;
//   })
// }

// mostrarDatosTecnologia() {
//   this.databaseService.obtenerDatosTecnologia().subscribe(data =>{
//     this.miTecnologia=data;
//   })

// }

}
