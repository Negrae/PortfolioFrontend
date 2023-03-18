import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-aboutme-edit',
  templateUrl: './aboutme-edit.component.html',
  styleUrls: ['./aboutme-edit.component.css']
})
export class AboutmeEditComponent implements OnInit {

  datosPersona:any;

  editarPersForm = new FormGroup({
    'id': new FormControl(''),
    'nombre': new FormControl(''),
    'apellido': new FormControl(''),
    'apodo': new FormControl(''),
    'img': new FormControl(''),
    'abouttext': new FormControl(''),
    'seniority': new FormControl('')
  });

  constructor(private databaseservice:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
      this.databaseservice.obtenerPersona().subscribe(data => {
      this.datosPersona=data;
      console.log(data);
      this.editarPersForm.setValue({
        'id': this.datosPersona.id,
        'nombre': this.datosPersona.nombre,
        'apellido': this.datosPersona.apellido,
        'apodo': this.datosPersona.apodo,
        'img': this.datosPersona.img,
        'abouttext': this.datosPersona.abouttext,
        'seniority': this.datosPersona.seniority
      })
    })
  }

  editarPersona(persona:any) {
    this.databaseservice.editarPersona(persona).subscribe(() =>{
      this.ngOnInit();
    });
    this.router.navigate(['portfolioedit'])
  }

  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }
}
