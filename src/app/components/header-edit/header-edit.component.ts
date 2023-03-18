import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css']
})
export class HeaderEditComponent implements OnInit {

  datosContacto:any;

  editarContForm = new FormGroup({
    'id': new FormControl(''),
    'whatsapp': new FormControl(''),
    'email': new FormControl(''),
    'linkedin_url': new FormControl(''),
    'instagram_url': new FormControl(''),
    'facebook_url': new FormControl(''),
    'youtube_url': new FormControl('')
  });

  constructor(private databaseservice:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
      this.databaseservice.obtenerContacto().subscribe(data => {
      this.datosContacto=data;
      console.log(data);
      this.editarContForm.setValue({
        'id': this.datosContacto.id,
        'whatsapp': this.datosContacto.whatsapp,
        'email': this.datosContacto.email,
        'linkedin_url': this.datosContacto.linkedin_url,
        'instagram_url': this.datosContacto.instagram_url,
        'facebook_url': this.datosContacto.facebook_url,
        'youtube_url': this.datosContacto.youtube_url
      })
    })
  }

  editarContacto(contacto:any) {
    this.databaseservice.editarContacto(contacto).subscribe(() =>{
      this.ngOnInit();
    });
    this.router.navigate(['portfolioedit'])
  }

}

