import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, AbstractControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Login Form';
  
  fLogin: FormGroup;
  emailInp: FormControl;
  pwdInp: FormControl;
  constructor(){}

  ngOnInit(){
    this.emailInp = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]));
    this.pwdInp = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]));
    this.fLogin = new FormGroup({
      email: this.emailInp,
      password: this.pwdInp
    }, {updateOn:'blur'});

    // this.fLogin = new FormGroup({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.minLength(6)
    //   ]))
    // }, {updateOn: 'blur'});
  }

  onSubmit(){
    console.log(this.fLogin);
  }

  getFormControl(name){
    return this.fLogin.get(name);
  }
}