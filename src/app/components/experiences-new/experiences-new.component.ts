import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { experienciainterface } from 'src/app/interface/experiencia.interface';

@Component({
  selector: 'app-experiences-new',
  templateUrl: './experiences-new.component.html',
  styleUrls: ['./experiences-new.component.css']
})
export class ExperiencesNewComponent implements OnInit {
  
  @Output() agregarExperiencia:EventEmitter<experienciainterface> = new EventEmitter();
  
  nombreExp:string = "";
  descripcionExp:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarExperiencia() {
    if (this.nombreExp.length === 0, this.descripcionExp.length === 0){
      alert("Por favor complete todos los campos");
      return 
    }
    const {nombreExp, descripcionExp} = this
    const nuevaExperiencia = {nombreExp, descripcionExp}
    this.agregarExperiencia.emit(nuevaExperiencia);
    this.ngOnInit();
  }

  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

}

