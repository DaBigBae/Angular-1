import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators } from '@angular/forms';

const control = new FormControl('', { updateOn: 'blur' });

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  fContact: FormGroup;
  nInp: FormControl;
  cInp: FormControl;
  eInp: FormControl;
  pInp: FormControl;

  constructor() { }

  ngOnInit() {
    this.eInp = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')// after @ 3 character => alway true
    ]));
    this.pInp = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(12),
      Validators.pattern('^[0-9-+s()]*$')
    ]));
    this.nInp = new FormControl('', Validators.required);
    this.cInp = new FormControl('', Validators.required);
    this.fContact = new FormGroup({
      email: this.eInp,
      name:this.nInp,
      phone:this.pInp,
      company:this.cInp
    })
  }

  onSubmit() {
    console.log(this.fContact);
  }
}

