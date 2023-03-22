import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacioninterface } from 'src/app/interface/educacion.interface';
import { experienciainterface } from 'src/app/interface/experiencia.interface';
import { hardskillinterface } from 'src/app/interface/hardskill.interface';
import { proyectointerface } from 'src/app/interface/proyecto.interface';
import { softskillinterface } from 'src/app/interface/softskill.interface';
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
  proyecto:proyectointerface [] = [];
  hardskill:hardskillinterface [] = [];
  softskill:softskillinterface [] = []

  constructor(
    private router:Router,
    private databaseService:DatabaseService
    )
    {}

  ngOnInit(): void {
    this.mostrarDatosPersona();
    this.mostrarDatosContacto();
    this.mostrarDatosEducacion();
    this.mostrarDatosExperiencia();
    this.mostrarDatosProyecto();
    this.mostrarDatosHardSkill();
    this.mostrarDatosSoftSkill();
  }

  login(){
    this.router.navigate(['/login'])
  }

  register(){
    this.router.navigate(['/register'])
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
    this.databaseService.obtenerDatosExperiencia().subscribe(data =>{
      this.experiencia=data;
    })
  }

  mostrarDatosProyecto() {
    this.databaseService.obtenerDatosProyecto().subscribe(data =>{
      this.proyecto=data;
    })
  }

  mostrarDatosHardSkill() {
    this.databaseService.obtenerDatosHardSkill().subscribe(data =>{
      this.hardskill=data;
    })
}

  mostrarDatosSoftSkill() {
    this.databaseService.obtenerDatosSoftSkill().subscribe(data =>{
      this.softskill=data;
    })
}

}
