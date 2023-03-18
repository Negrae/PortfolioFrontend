import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-experiences-form',
  templateUrl: './experiences-form.component.html',
  styleUrls: ['./experiences-form.component.css']
})
export class ExperiencesFormComponent implements OnInit {

  datosExperiencia:any
  editarExpForm = new FormGroup({
    'id': new FormControl(''),
    'nombreExp': new FormControl(''),
    'descripcionExp': new FormControl('')
  });

  constructor(private router:Router,
              private activatedroute:ActivatedRoute,
              private databaseService:DatabaseService) { }

  ngOnInit(): void {
    let experienciaid = this.activatedroute.snapshot.paramMap.get('id');
    this.databaseService.obtenerExperiencia(experienciaid).subscribe(data => {
      this.datosExperiencia=data;
      this.editarExpForm.setValue({
        'id': this.datosExperiencia.id,
        'nombreExp': this.datosExperiencia.nombreExp,
        'descripcionExp': this.datosExperiencia.descripcionExp
      })
    })
  }


  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

  editarExperiencia(datosExperiencia:any) {
    this.databaseService.editarExperiencia(datosExperiencia).subscribe(() =>{
      this.ngOnInit();
    });
    this.router.navigate(['portfolioedit'])
  }

}