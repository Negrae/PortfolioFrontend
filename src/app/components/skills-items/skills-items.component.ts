import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { softskillinterface } from 'src/app/interface/softskill.interface';

@Component({
  selector: 'app-skills-items',
  templateUrl: './skills-items.component.html',
  styleUrls: ['./skills-items.component.css']
})
export class SkillsItemsComponent implements OnInit {

  @Input() softskill:any
  @Output() borrarSoftskillPass:EventEmitter<softskillinterface>=new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarSoftskill(softskill:softskillinterface) {
    this.borrarSoftskillPass.emit(softskill);
  }

  editSoftskill(id:softskillinterface) {
    this.router.navigate(['portfolio/softskilledit', id]);
  }

}
