import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from "../modols/product";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addperson: FormGroup;
  arr: any[]=[]

  constructor() { 
    this.addperson = new FormGroup({
      name: new FormControl("", [Validators.required]),
      Username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.min(8)]),
      confirmpassword: new FormControl("", [Validators.required, Validators.min(8)])
  })
  }
  register() {
    
    let user = this.addperson.value as Register
    this.arr.push(user)
    console.log(this.arr);
  }

  ngOnInit(): void {
  }

}
