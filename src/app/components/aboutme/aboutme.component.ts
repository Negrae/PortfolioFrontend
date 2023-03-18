import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  // persona: personamodel = new personamodel("","","","","","");
  persona:any=[];
  

  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {

    //this.databaseService.getPersona().subscribe(data => (this.persona = data))

    this.mostrarDatosPersona();


  }

  mostrarDatosPersona() {
    this.databaseService.obtenerPersona().subscribe(data =>{
      this.persona=data;
    })
  }
}
