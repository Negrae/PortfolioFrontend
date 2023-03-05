import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactointerface } from '../interface/contacto.interface';
import { personamodel } from '../interface/persona.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  //PERSONA SERVICES VIEJO
  URLpersonas= 'http://localhost:8080/personas/';
  URLcontacto= 'http://localhost:8080/contacto/1';

  
  constructor(private http:HttpClient) { }

  public getPersona(): Observable<personamodel>{
    return this.http.get<personamodel>(this.URLpersonas+'1');
  }

  //Métodos correspondientes al componente Contacto
  obtenerDatosContacto(): Observable<any[]> {
    return this.http.get<any[]>(this.URLcontacto)
  }

  obtenerContacto(): Observable<contactointerface> {
    const url = `http://localhost:8080/contacto/1`
    return this.http.get<contactointerface>(url);
  }

  editarContacto(contacto:contactointerface): Observable<contactointerface> {
    const url = `http://localhost:8080/contacto/editar/${contacto.id}`
    return this.http.put<contactointerface>(url, contacto);
  }







}

