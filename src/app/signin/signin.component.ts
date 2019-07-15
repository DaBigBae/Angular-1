import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators } from '@angular/forms';

const control = new FormControl('', { updateOn: 'blur' });

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  fLogin: FormGroup;
  emailInp: FormControl;
  pwdInp: FormControl;

  constructor() { }

  ngOnInit() {
    this.emailInp = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')// after @ 3 character => alway true
    ]));
    this.pwdInp = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]));
    this.fLogin = new FormGroup({
      email: this.emailInp,
      password: this.pwdInp
    });
  }

  onSubmit() {
    console.log(this.fLogin);
  }
}
