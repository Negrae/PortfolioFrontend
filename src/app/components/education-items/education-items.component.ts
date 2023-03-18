import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { educacioninterface } from 'src/app/interface/educacion.interface';

@Component({
  selector: 'app-education-items',
  templateUrl: './education-items.component.html',
  styleUrls: ['./education-items.component.css']
})
export class EducationItemsComponent implements OnInit {

  @Input() educacion:any
  @Output() educacionElimiarPass:EventEmitter<educacioninterface>=new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarEducacion(educacion:educacioninterface) {
    this.educacionElimiarPass.emit(educacion);
  }

  editEducacion(id:educacioninterface) {
    this.router.navigate(['portfolio/educacionedit', id]);
  }
}
