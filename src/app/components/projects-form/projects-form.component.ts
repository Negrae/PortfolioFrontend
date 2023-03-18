import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnInit {

  datosProyecto:any
  editarProyForm = new FormGroup({
    'id': new FormControl(''),
    'nombreProyecto': new FormControl(''),
    'descripcionProyecto': new FormControl(''),
    'urlProyecto': new FormControl(''),
    'urlImgProyecto': new FormControl('')
  });

  constructor(private router:Router,
              private activatedroute:ActivatedRoute,
              private databaseService:DatabaseService) { }

  ngOnInit(): void {
    let proyectoid = this.activatedroute.snapshot.paramMap.get('id');
    this.databaseService.obtenerProyecto(proyectoid).subscribe(data => {
      this.datosProyecto=data;
      this.editarProyForm.setValue({
        'id': this.datosProyecto.id,
        'nombreProyecto': this.datosProyecto.nombreProyecto,
        'descripcionProyecto': this.datosProyecto.descripcionProyecto,
        'urlProyecto': this.datosProyecto.urlProyecto,
        'urlImgProyecto': this.datosProyecto.urlImgProyecto
      })
    })
  }


  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

  editarProyecto(datosProyecto:any) {
    this.databaseService.editarProyecto(datosProyecto).subscribe(() =>{
      this.ngOnInit();
    });
    this.router.navigate(['portfolioedit'])
  }

}
