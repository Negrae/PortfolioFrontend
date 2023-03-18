import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactointerface } from '../interface/contacto.interface';
import { personainterface } from '../interface/persona.interface';
import { educacioninterface } from '../interface/educacion.interface';
import { experienciainterface } from '../interface/experiencia.interface';
import { proyectointerface } from '../interface/proyecto.interface';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  URLpersonas= 'http://localhost:8080/personas/';
  URLcontacto= 'http://localhost:8080/contacto/';
  URLeducacion= 'http://localhost:8080/educacion/';
  URLexperiencias= 'http://localhost:8080/experiencias/';
  URLproyectos= 'http://localhost:8080/proyectos/';
  URLhardskills= 'http://localhost:8080/hardskills/';
  URLsoftskills= 'http://localhost:8080/softskills/';




  constructor(private http:HttpClient) { }



  // Servicios para PERSONA

  // public getPersona(): Observable<personamodel>{
  //   return this.http.get<personamodel>(this.URLpersona);
  // }

  obtenerDatosPersona(): Observable<personainterface[]> {
    return this.http.get<personainterface[]>(this.URLpersonas+"verpersonas")
}

  obtenerPersona(): Observable<personainterface> {
    return this.http.get<personainterface>(this.URLpersonas+"1");
  }

  editarPersona(persona:personainterface): Observable<personainterface> {
    const url = `http://localhost:8080/personas/editar/${persona.id}`
    return this.http.put<personainterface>(url, persona);
  }


  // Servicios para CONTACTO

  obtenerDatosContacto(): Observable<any[]> {
    return this.http.get<any[]>(this.URLcontacto)
  }

  obtenerContacto(): Observable<contactointerface> {
    return this.http.get<contactointerface>(this.URLcontacto+"1");
  }

  editarContacto(contacto:contactointerface): Observable<contactointerface> {
    const url = `http://localhost:8080/contacto/editar/${contacto.id}`
    return this.http.put<contactointerface>(url, contacto);
  }

  // Servicios para EDUCACION

  obtenerDatosEducacion(): Observable<educacioninterface[]> {
    return this.http.get<educacioninterface[]>(this.URLeducacion+"vereducaciones")
  }
  
  borrarEducacion(educacion:educacioninterface): Observable<educacioninterface[]> {
    const url = `http://localhost:8080/educacion/borrar/${educacion.id}`
    return this.http.delete<educacioninterface[]>(url);
  }
  
  agregarEducacionDB(educacion:educacioninterface): Observable<educacioninterface> {
    return this.http.post<educacioninterface>(this.URLeducacion+"nuevaeducacion", educacion, httpOptions);
  }
  
  obtenerEducacion(id:any): Observable<educacioninterface> {
    const url = `http://localhost:8080/educacion/${id}`
    return this.http.get<educacioninterface>(url);
  }
  
  editarEducacion(datosEstudios:educacioninterface): Observable<educacioninterface> {
    const url = `http://localhost:8080/educacion/editar/${datosEstudios.id}`
    return this.http.put<educacioninterface>(url, datosEstudios);
  }

  // Servicios para EXPERIENCIA

  obtenerDatosExperiencia(): Observable<experienciainterface[]> {
    return this.http.get<experienciainterface[]>(this.URLexperiencias+"verexperiencias")
  }
  borrarExperiencia(experiencia:experienciainterface): Observable<experienciainterface[]> {
    const url = `http://localhost:8080/experiencias/borrar/${experiencia.id}`
    return this.http.delete<experienciainterface[]>(url);
  }
  
  agregarExperienciaDB(experiencia:experienciainterface): Observable<experienciainterface> {
    return this.http.post<experienciainterface>(this.URLexperiencias+"nuevaexperiencia", experiencia, httpOptions);
  }
  
  editarExperiencia(datosExperiencia:any): Observable<experienciainterface> {
    const url = `http://localhost:8080/experiencias/editar/${datosExperiencia.id}`
    return this.http.put<experienciainterface>(url, datosExperiencia);
  }
  
  obtenerExperiencia(id:any): Observable<experienciainterface> {
    const url = `http://localhost:8080/experiencias/${id}`
    return this.http.get<experienciainterface>(url);
  }

    // Servicios para PROYECTO

    obtenerDatosProyecto(): Observable<proyectointerface[]> {
      return this.http.get<proyectointerface[]>(this.URLproyectos+"verproyectos")
    }
    borrarProyecto(proyecto:proyectointerface): Observable<proyectointerface[]> {
      const url = `http://localhost:8080/proyectos/borrar/${proyecto.id}`
      return this.http.delete<proyectointerface[]>(url);
    }
    
    agregarProyectoDB(proyecto:proyectointerface): Observable<proyectointerface> {
      return this.http.post<proyectointerface>(this.URLproyectos+"nuevoproyecto", proyecto, httpOptions);
    }
    
    editarProyecto(datosProyecto:any): Observable<proyectointerface> {
      const url = `http://localhost:8080/proyectos/editar/${datosProyecto.id}`
      return this.http.put<proyectointerface>(url, datosProyecto);
    }
    
    obtenerProyecto(id:any): Observable<proyectointerface> {
      const url = `http://localhost:8080/proyectos/${id}`
      return this.http.get<proyectointerface>(url);
    }






}

