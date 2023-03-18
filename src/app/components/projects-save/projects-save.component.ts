import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyectointerface } from 'src/app/interface/proyecto.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-projects-save',
  templateUrl: './projects-save.component.html',
  styleUrls: ['./projects-save.component.css']
})
export class ProjectsSaveComponent implements OnInit {
  miProyecto: proyectointerface [] = [];

  constructor(private databaseService:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }
  agregarNuevoProyecto(proyecto:proyectointerface) {
    this.databaseService.agregarProyectoDB(proyecto).subscribe((proyecto) => {
      this.miProyecto.push(proyecto);
      this.router.navigate(['portfolioedit']);
    })
    
  }

}
