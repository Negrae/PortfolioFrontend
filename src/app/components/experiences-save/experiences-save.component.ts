import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experienciainterface } from 'src/app/interface/experiencia.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-experiences-save',
  templateUrl: './experiences-save.component.html',
  styleUrls: ['./experiences-save.component.css']
})
export class ExperiencesSaveComponent implements OnInit {
  miExperiencia: experienciainterface [] = [];

  constructor(private databaseService:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }
  agregarNuevaExperiencia(experiencia:experienciainterface) {
    this.databaseService.agregarExperienciaDB(experiencia).subscribe((experiencia) => {
      this.miExperiencia.push(experiencia);
      this.router.navigate(['portfolioedit']);
    })
    
  }

}

