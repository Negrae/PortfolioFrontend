import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hardskillinterface } from 'src/app/interface/hardskill.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-hardskills-save',
  templateUrl: './hardskills-save.component.html',
  styleUrls: ['./hardskills-save.component.css']
})
export class HardskillsSaveComponent implements OnInit {

  miHardskill: hardskillinterface [] = [];

  constructor(private databaseService:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }

  agregarNuevaHardskill(hardskill:hardskillinterface) {
    this.databaseService.agregarHardSkillDB(hardskill).subscribe((hardskill) => {
      this.miHardskill.push(hardskill);
      this.router.navigate(['portfolioedit']);
    })   
  }

}

