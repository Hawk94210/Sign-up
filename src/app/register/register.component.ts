import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup|any;
  users: User[] = [];


  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username : new FormControl(''),
      email : new FormControl(''),
      password: new FormControl(''),
      confirmpassword : new FormControl('')
    });
  }
  onSubmit(){
    this.users.push(this.registerForm.value);
    console.log(this.users);
  }
}
