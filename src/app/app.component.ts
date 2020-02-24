import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-login-demo';
constructor(private http:HttpClient){}

ngOnInit()
{
const page=1;
console.log("normal function call", this.getUserList(page))
this.getUserList(page).subscribe(response =>{
  console.log("inside success call back", response)
})

let createObj ={'name':'keshav', 'job':'Developer'}
this.createUser(createObj).subscribe(res =>{
console.log('user Created response', res)
});
}

getUserList(page)
{
return this.http.get<any>('https://reqres.in/api/user?page='+page)
}

createUser(obj)
{
return this.http.post<any>('https://reqres.in/api/users',obj)
}


}

