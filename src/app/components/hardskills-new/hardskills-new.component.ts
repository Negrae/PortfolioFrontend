import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { hardskillinterface } from 'src/app/interface/hardskill.interface';

@Component({
  selector: 'app-hardskills-new',
  templateUrl: './hardskills-new.component.html',
  styleUrls: ['./hardskills-new.component.css']
})
export class HardskillsNewComponent implements OnInit {

  @Output() agregarHardskill:EventEmitter<hardskillinterface> = new EventEmitter();
  
  nombreHaSkill:string = "";
  porcentajeHaSkill:number = 50;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarHardskill() {
    if (this.nombreHaSkill.length === 0, this.porcentajeHaSkill <= 0 && this.porcentajeHaSkill > 100){
      alert("Por favor complete todos los campos");
      return 
    }
    const {nombreHaSkill, porcentajeHaSkill} = this
    const nuevaHardskill = {nombreHaSkill, porcentajeHaSkill}
    this.agregarHardskill.emit(nuevaHardskill);
    this.ngOnInit();
  }

  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

}

