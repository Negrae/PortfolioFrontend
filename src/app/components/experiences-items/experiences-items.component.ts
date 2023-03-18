import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { experienciainterface } from 'src/app/interface/experiencia.interface';

@Component({
  selector: 'app-experiences-items',
  templateUrl: './experiences-items.component.html',
  styleUrls: ['./experiences-items.component.css']
})
export class ExperiencesItemsComponent implements OnInit {

  @Input() experiencia:any
  @Output() borrarExperienciaPass:EventEmitter<experienciainterface>=new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarExperiencia(experiencia:experienciainterface) {
    this.borrarExperienciaPass.emit(experiencia);
  }

  editExperiencia(id:experienciainterface) {
    this.router.navigate(['portfolio/experienciaedit', id]);
  }
}