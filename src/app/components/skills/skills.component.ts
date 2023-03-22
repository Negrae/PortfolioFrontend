import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hardskillinterface } from 'src/app/interface/hardskill.interface';
import { softskillinterface } from 'src/app/interface/softskill.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  miSoftskill: softskillinterface [] = [];
  miHardskill: hardskillinterface [] = [];

  constructor(
    private router:Router,
    private databaseService:DatabaseService
    )
    {}

  ngOnInit(): void {
    this.mostrarDatosSoSkill();
    this.mostrarDatosHaSkill();
  }

  mostrarDatosSoSkill() {
    this.databaseService.obtenerDatosSoftSkill().subscribe(softskill =>{
      this.miSoftskill=softskill;
    })}

  mostrarDatosHaSkill() {
    this.databaseService.obtenerDatosHardSkill().subscribe(hardskill =>{
      this.miHardskill=hardskill;
    })}
  

  eliminarSoSkill(softskill:softskillinterface) {
    this.databaseService.borrarSoftSkill(softskill).subscribe(() => {
      this.miSoftskill = this.miSoftskill.filter(e => e.id!== softskill.id)
    })
  }

  eliminarHaSkill(hardskill:hardskillinterface) {
    this.databaseService.borrarHardSkill(hardskill).subscribe(() => {
      this.miHardskill = this.miHardskill.filter(e => e.id!== hardskill.id)
    })
  }

  addSoSkill() {
    this.router.navigate(['portfolio/softskillsave'])
  }

  addHaSkill() {
    this.router.navigate(['portfolio/hardskillsave'])
  }
}
