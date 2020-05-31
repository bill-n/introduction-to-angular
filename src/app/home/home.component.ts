import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularService } from '../services/angular.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  genders = ['male', 'female'];
  signup: FormGroup
  loadedPosts = [];
  constructor(private http: HttpClient, private angularservice: AngularService) { }
 

  
  ngOnInit(): void {
    this.signup = new FormGroup({
      Username: new FormControl(null,Validators.required),    //:default name, validators
      email: new FormControl(null,[Validators.required, Validators.email]),
      gender: new FormControl('male')
    })

   
  }
  getttingPost(){
    this.angularservice.getPost().subscribe(posts => {
      this.loadedPosts = posts;
      console.log(posts)
    });
  }

  onSubmit(){
    var info = this.signup.value
    this.angularservice.sendPost(info)
    .subscribe((response) =>{console.log('response',response)})
    this.signup.reset()
    
        
    }

    delPoooost(){
      this.angularservice.deletePost().subscribe((response)=>{console.log(response)})
    }


    
    
}
