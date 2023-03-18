import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { proyectointerface } from 'src/app/interface/proyecto.interface';

@Component({
  selector: 'app-projects-items',
  templateUrl: './projects-items.component.html',
  styleUrls: ['./projects-items.component.css']
})
export class ProjectsItemsComponent implements OnInit {

  @Input() proyecto:any
  @Output() borrarProyectoPass:EventEmitter<proyectointerface>=new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarProyecto(proyecto:proyectointerface) {
    this.borrarProyectoPass.emit(proyecto);
  }

  editProyecto(id:proyectointerface) {
    this.router.navigate(['portfolio/proyectoedit', id]);
  }
}