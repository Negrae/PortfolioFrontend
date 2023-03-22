import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { hardskillinterface } from 'src/app/interface/hardskill.interface';

@Component({
  selector: 'app-hardskills-items',
  templateUrl: './hardskills-items.component.html',
  styleUrls: ['./hardskills-items.component.css']
})
export class HardskillsItemsComponent implements OnInit {

  @Input() hardskill:any
  @Output() borrarHardskillPass:EventEmitter<hardskillinterface>=new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarHardskill(hardskill:hardskillinterface) {
    this.borrarHardskillPass.emit(hardskill);
  }

  editHardskill(id:hardskillinterface) {
    this.router.navigate(['portfolio/hardskilledit', id]);
  }


}
