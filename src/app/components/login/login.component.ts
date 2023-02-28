import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formLogin:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router: Router
    )
    {
        this.formLogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })

    this.formLogin=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]],
      }
    )
  }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.formLogin.get('email');
  }

  get Password()
  {
    return this.formLogin.get('password');
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/portfolio'])
    })
    .catch(error => {
      console.log(error);
      alert("El usuario no es correcto :("); 
    });
  }

}
