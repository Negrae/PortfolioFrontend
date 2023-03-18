import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  datosEstudios:any
  editarEstForm = new FormGroup({
    'id': new FormControl(''),
    'nombreEdu': new FormControl(''),
    'descripcionEdu': new FormControl('')
  });

  constructor(private router:Router,
              private activatedroute:ActivatedRoute,
              private DatabaseService:DatabaseService) { }

  ngOnInit(): void {
    let educacionid = this.activatedroute.snapshot.paramMap.get('id');
    this.DatabaseService.obtenerEducacion(educacionid).subscribe(data => {
      this.datosEstudios=data;
      this.editarEstForm.setValue({
        'id': this.datosEstudios.id,
        'nombreEdu': this.datosEstudios.nombreEdu,
        'descripcionEdu': this.datosEstudios.descripcionEdu
      })
    })
  }


  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

  editarEducacion(datosEstudios:any) {
    this.DatabaseService.editarEducacion(datosEstudios).subscribe(() =>{
      this.ngOnInit();
    });
    this.router.navigate(['portfolioedit'])
  }

}

