import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-hardskills-form',
  templateUrl: './hardskills-form.component.html',
  styleUrls: ['./hardskills-form.component.css']
})
export class HardskillsFormComponent implements OnInit {

  datosHardskill:any;

  editarHaSkillForm = new FormGroup({
    'id': new FormControl(''),
    'nombreHaSkill': new FormControl(''),
    'porcentajeHaSkill': new FormControl('')
  });

  constructor(private router:Router,
              private activatedroute:ActivatedRoute,
              private databaseService:DatabaseService) { }

  ngOnInit(): void {

    let hardskillid = this.activatedroute.snapshot.paramMap.get('id');
    this.databaseService.obtenerHardSkill(hardskillid).subscribe(data => {
      this.datosHardskill=data;
      this.editarHaSkillForm.setValue({
        'id': this.datosHardskill.id,
        'nombreHaSkill': this.datosHardskill.nombreHaSkill,
        'porcentajeHaSkill': this.datosHardskill.porcentajeHaSkill
      })
    })

  }


  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

  editarHardSkill(datosHardskill:any) {
    this.databaseService.editarHardSkill(datosHardskill).subscribe(() =>{
      this.ngOnInit();
    });
    this.router.navigate(['portfolioedit'])
  }

}

