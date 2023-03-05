import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contacto:any=[];


  constructor(
    private router:Router,
    private userService:UserService,
    private databaseService:DatabaseService
    )
    {}

  ngOnInit(): void {
    this.mostrarDatosContacto();
  }

  login(){
    this.router.navigate(['/login'])
  }

  signOut() {
    this.userService.logout()
    .then(()=> {
      this.router.navigate(['/portfolio']);
    })
    .catch(error => console.log(error));
  }

  mostrarDatosContacto() {
    this.databaseService.obtenerDatosContacto().subscribe(data =>{
      this.contacto=data;
    })
  }

}
