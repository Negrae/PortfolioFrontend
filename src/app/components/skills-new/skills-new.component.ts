import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { hardskillinterface } from 'src/app/interface/hardskill.interface';
import { softskillinterface } from 'src/app/interface/softskill.interface';

@Component({
  selector: 'app-skills-new',
  templateUrl: './skills-new.component.html',
  styleUrls: ['./skills-new.component.css']
})
export class SkillsNewComponent implements OnInit {

  @Output() agregarSoftskill:EventEmitter<softskillinterface> = new EventEmitter();
  @Output() agregarHardskill:EventEmitter<hardskillinterface> = new EventEmitter();
  
  nombreSoSkill:string = "";
  porcentajeSoSkill:number = 50;
  nombreHaSkill:string = "";
  porcentajeHaSkill:number = 50;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarSoftskill() {
    if (this.nombreSoSkill.length === 0, this.porcentajeSoSkill <= 0 && this.porcentajeSoSkill > 100){
      alert("Por favor complete todos los campos");
      return 
    }
    const {nombreSoSkill, porcentajeSoSkill} = this
    const nuevaSoftskill = {nombreSoSkill, porcentajeSoSkill}
    this.agregarSoftskill.emit(nuevaSoftskill);
    this.ngOnInit();
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
