import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../_services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  loginName;
  mobile;
  obj:any[];
  constructor(private router:Router,private route: ActivatedRoute, private userSrvc:UserServiceService) { }

  ngOnInit() {
    this.obj = JSON.parse(sessionStorage.getItem('userList'));
    
  console.log(" list size : " + this.obj.length)
 
 this.obj.forEach(item => { 
  console.log("loginName : " + item.loginName + " mobile : " + item.mobile + " email : " + item.email + " password : " + item.password )
});

    console.log("###################" + this.userSrvc.getLoginName() + "::" +this.userSrvc.getMobile() );
    this.loginName=this.userSrvc.getLoginName();
  this.mobile=this.userSrvc.getMobile();
  
  console.log("login : " + this.loginName)
  console.log("mobile : " + this.mobile)
  }

  editUser(user:any){
console.log("name : " + user.loginName)
sessionStorage.setItem('user' , JSON.stringify(user));
this.router.navigate(['/login'])
  }

}
