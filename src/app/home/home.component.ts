import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { AngularService } from '../service/angular.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  genders = ['male', 'female'];
  signup: FormGroup
  loadedPosts = [];
  constructor(private angularservice: AngularService) { }
 
  ngOnInit(): void {
    this.signup = new FormGroup({
      'Username': new FormControl(null,Validators.required),   
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'gender': new FormControl('male')
    })

   
  }
   


  onSubmit(){
    var info = this.signup.value
    this.angularservice.sendData(info).subscribe((response) =>{console.log(response)})
  }

}