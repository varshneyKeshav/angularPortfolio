import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
loginName:String;
mobile:number;
email:String;
password:String;

  constructor(){}
  getLoginName()
  {
    return this.loginName;
  }

  setLoginName(inLoginName:String)
  {
    this.loginName=inLoginName;
  }

  getMobile()
  {
    return this.mobile;
  }

  setMobile(inMobile:number)
  {
    this.mobile=inMobile;
  }

  getEmail()
  {
    return this.email;
  }

  setEmail(inEmail:String)
  {
    this.email=inEmail;
  }

  getPassword()
  {
    return this.password;
  }

  setPassword(inPassword:String)
  {
    this.password=inPassword;
  }

}
