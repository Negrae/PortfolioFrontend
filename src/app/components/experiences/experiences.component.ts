import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experienciainterface } from 'src/app/interface/experiencia.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  
  miExperiencia: experienciainterface [] = [];

  constructor(
    private router:Router,
    private databaseService:DatabaseService
    )
    {}

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.databaseService.obtenerDatosExperiencia().subscribe(experiencia =>{
      this.miExperiencia=experiencia;
    })}

  eliminarExperiencia(experiencia:experienciainterface) {
    this.databaseService.borrarExperiencia(experiencia).subscribe(() => {
      this.miExperiencia = this.miExperiencia.filter(e => e.id!== experiencia.id)
    })
  }

  addExperiencia() {
    this.router.navigate(['portfolio/experienciasave'])
  }
}
