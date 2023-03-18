import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { educacioninterface } from 'src/app/interface/educacion.interface';

@Component({
  selector: 'app-education-new',
  templateUrl: './education-new.component.html',
  styleUrls: ['./education-new.component.css']
})
export class EducationNewComponent implements OnInit {
  @Output() agregarEducacion:EventEmitter<educacioninterface> = new EventEmitter();
  
  nombreEdu:string = "";
  descripcionEdu:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarEducacion() {
    if (this.nombreEdu.length === 0, this.descripcionEdu.length === 0){
      alert("Por favor complete todos los campos");
      return 
    }
    const {nombreEdu, descripcionEdu} = this
    const nuevaEducacion = {nombreEdu, descripcionEdu}
    this.agregarEducacion.emit(nuevaEducacion);
    this.ngOnInit();
  }

  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

}
