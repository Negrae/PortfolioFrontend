import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { personamodel } from 'src/app/interface/persona.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: personamodel = new personamodel("","","","","","");
  constructor(public personaService: DatabaseService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data))
  }

}
