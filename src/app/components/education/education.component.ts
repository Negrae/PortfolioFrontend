import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacioninterface } from 'src/app/interface/educacion.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  miEducacion: educacioninterface [] = [];

  constructor(
    private router:Router,
    private databaseService:DatabaseService
    )
    {}

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.databaseService.obtenerDatosEducacion().subscribe(data =>{
      this.miEducacion=data;
    })}

  eliminarEducacion(educacion:educacioninterface) {
    this.databaseService.borrarEducacion(educacion).subscribe(() => {
      this.miEducacion = this.miEducacion.filter(e => e.id!== educacion.id)
    })
  }

  addEducacion() {
    this.router.navigate(['portfolio/educacionsave'])
  }
}
