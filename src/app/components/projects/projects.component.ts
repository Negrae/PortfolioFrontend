import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyectointerface } from 'src/app/interface/proyecto.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  miProyecto: proyectointerface [] = [];

  constructor(
    private router:Router,
    private databaseService:DatabaseService
    )
    {}

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.databaseService.obtenerDatosProyecto().subscribe(proyecto =>{
      this.miProyecto=proyecto;
    })}

  eliminarProyecto(proyecto:proyectointerface) {
    this.databaseService.borrarProyecto(proyecto).subscribe(() => {
      this.miProyecto = this.miProyecto.filter(e => e.id!== proyecto.id)
    })
  }

  addProyecto() {
    this.router.navigate(['portfolio/proyectosave'])
  }
}
