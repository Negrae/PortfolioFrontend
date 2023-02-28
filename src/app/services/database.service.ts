import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personamodel } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  //PERSONA SERVICES
  URLpersonas= 'http://localhost:8080/personas/';
  constructor(private http:HttpClient) { }
  public getPersona(): Observable<personamodel>{
    return this.http.get<personamodel>(this.URLpersonas+'1');
  }
}
