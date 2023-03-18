import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacioninterface } from 'src/app/interface/educacion.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-education-save',
  templateUrl: './education-save.component.html',
  styleUrls: ['./education-save.component.css']
})
export class EducationSaveComponent implements OnInit {
  miEducacion: educacioninterface [] = [];

  constructor(private databaseService:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }
  agregarNuevaEducacion(educacion:educacioninterface) {
    this.databaseService.agregarEducacionDB(educacion).subscribe((educacion) => {
      this.miEducacion.push(educacion);
      this.router.navigate(['portfolioedit']);
    })
    
  }

}

