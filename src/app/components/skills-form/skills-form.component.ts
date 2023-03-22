import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {

  datosSoftskill: any;

  editarSoSkillForm = new FormGroup({
    'id': new FormControl(''),
    'nombreSoSkill': new FormControl(''),
    'porcentajeSoSkill': new FormControl('')
  });

  constructor(private router:Router,
              private activatedroute:ActivatedRoute,
              private databaseService:DatabaseService) { }

  ngOnInit(): void {

    let softskillid = this.activatedroute.snapshot.paramMap.get('id');
    this.databaseService.obtenerSoftSkill(softskillid).subscribe(data => {
      this.datosSoftskill=data;
      this.editarSoSkillForm.setValue({
        'id': this.datosSoftskill.id,
        'nombreSoSkill': this.datosSoftskill.nombreSoSkill,
        'porcentajeSoSkill': this.datosSoftskill.porcentajeSoSkill
      })
    })

  }


  backPorfolio() {
    this.router.navigate(['portfolioedit']);
  }

  editarSoftSkill(datosSoftskill:any) {
    this.databaseService.editarSoftSkill(datosSoftskill).subscribe(() =>{
      this.ngOnInit();
    });
    this.router.navigate(['portfolioedit'])
  }

}
