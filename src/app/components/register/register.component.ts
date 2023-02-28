import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
formReg: FormGroup;
constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router: Router
  ) {

      this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })

    this.formReg = this.formBuilder.group(
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
    return this.formReg.get('email');
  }

  get Password()
  {
    return this.formReg.get('password');
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login'])
      })
      .catch(error => {
        console.log(error);
        alert("El usuario no es correcto :("); 
      });
  }

}
