import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servives/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  acces : any;
  loginForm : FormGroup;
  constructor(
    private authservice : AuthService,
    private formbuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    //this.initForm();
    const data = {
      "email":"louenkamfrank@gmail.com",
      "password":"wafrren"
    };
    console.log(data);
    this.authentification(data);
  }

  authentification(data){
    this.authservice.login(data).subscribe(
      (resp)=>{
          this.acces = resp;
          //console.log(resp);
      },
      (error)=>{
          console.log(error);
      }
    )
  }
  /** Permet d'initailiser le formulaire **/
  initForm(){
    this.loginForm = this.formbuilder.group(
      {
        email : ['',[Validators.required,Validators.email]],
        password : ['',[Validators.required]]
      }
    )
  }

}
