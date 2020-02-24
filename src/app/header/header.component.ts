import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
timer: any;
time= new   Observable(observer =>{
setInterval( () =>{
  observer.next(new Date());
},1000);
});
  ngOnInit() {
    this.time.subscribe(x =>{this.timer =x})
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  aboutMe()
  {
   this.router.navigateByUrl('/aboutMe');

  }
  contact()
  {
    this.router.navigateByUrl('/contact');
  }
  resume()
  {
    this.router.navigateByUrl('/resume');
  }
}
