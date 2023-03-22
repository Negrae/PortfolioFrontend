import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hardskillinterface } from 'src/app/interface/hardskill.interface';
import { softskillinterface } from 'src/app/interface/softskill.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-skills-save',
  templateUrl: './skills-save.component.html',
  styleUrls: ['./skills-save.component.css']
})
export class SkillsSaveComponent implements OnInit {
  miSoftskill: softskillinterface [] = [];
  miHardskill: hardskillinterface [] = [];

  constructor(private databaseService:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }

  agregarNuevaSoftskill(softskill:softskillinterface) {
    this.databaseService.agregarSoftSkillDB(softskill).subscribe((softskill) => {
      this.miSoftskill.push(softskill);
      this.router.navigate(['portfolioedit']);
    })   
  }

  agregarNuevaHardskill(hardskill:hardskillinterface) {
    this.databaseService.agregarHardSkillDB(hardskill).subscribe((hardskill) => {
      this.miHardskill.push(hardskill);
      this.router.navigate(['portfolioedit']);
    })   
  }

}
