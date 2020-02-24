import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { UserServiceService } from '../_services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objt:any[]=[
    {'loginName' : 'keshav' , 'mobile' : 8178210805 , 'email' : 'keshavvarshney1993@gmail.com', 'password' : 'keshav@123'},
    {'loginName' : 'madhav' , 'mobile' : 9540779879 , 'email' : 'madhav@gmail.com', 'password' : 'madhav@123'}];
    error:any;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder,private usersr : UserServiceService ) { }
  loginForm: FormGroup;
 // registerForm: FormGroup;
  formName: any="register";
  isSubmitted  =  false;
  mobNumberPattern = "^[6-9]{1}[0-9]{9}$";
  obj:any[];
  user:any;
  login; 
  mobile;
  email;
  password;
  isSuccess:boolean;
  errorMsg:any="";
  ngOnInit() {
    sessionStorage.setItem("userList",JSON.stringify(this.objt));

      this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  this.user=JSON.parse(sessionStorage.getItem('userList'));
  console.log("loginname : " + this.user[0].loginName + "mobile: "+this.user[0].mobile + "email: "+this.user[0].email)
  this.email = this.user.email;
  this.mobile=this.user.mobile;
  this.login=this.user.loginName;
  this.password = this.user.password;

    //sessionStorage.clear();
  }
  get formControls() { return this.loginForm.controls; }
  
  Submit(f){
    console.log(this.loginForm.value);

    sessionStorage.setItem('user', f.value.password)
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

  submitR(regForm:NgForm){
    this.errorMsg=""
    this.login=regForm.value.login;
    this.mobile=regForm.value.mobile;
    this.email = regForm.value.email;
    this.password = regForm.value.password;
    this.obj = JSON.parse(sessionStorage.getItem('userList'));
    //console.log(" list size : " + this.obj.length)
  
    this.obj.forEach(item => { 
      if ( (this.user.loginName == item.loginName) && (this.user.mobile == item.mobile ) && (this.user.email == item.email) && (this.user.password == item.password) )
      {
        this.obj.splice(this.obj.indexOf(item),1);
      }
    });
  
    this.obj.forEach(item => { 
      if ( (this.login == item.loginName) && (this.mobile == item.mobile ) && (this.email == item.email) )
      {
        this.errorMsg="Same details are already registered with other User."
      }    
    });
    if(this.errorMsg==""){
    this.obj.push({'loginName' : this.login , 'mobile' : this.mobile , 'email' : this.email ,
   'password' : this.password})
   sessionStorage.setItem("userList",JSON.stringify(this.obj));
   console.log(" list size after: " + this.obj.length)
   this.obj = JSON.parse(sessionStorage.getItem('userList'));
   this.obj.forEach(item => { 
    console.log("loginName : " + item.loginName + " mobile : " + item.mobile + " email : " + item.email + " password : " + item.password )
  });
          this.isSuccess=true;
    }
  }
 


}
