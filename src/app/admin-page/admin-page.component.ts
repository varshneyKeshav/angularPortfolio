import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    // if ($('.text-slider').length == 1) {
    //   var typed_strings = $('.text-slider-items').text();
    //   var typed = new Typed('.text-slider', {
    //     strings: typed_strings.split(','),
    //     typeSpeed: 80,
    //     loop: true,
    //     backDelay: 1100,
    //     backSpeed: 30
    //   });
    // }

    // document.getElementsByClassName('text-slider').length==1
    // {
    //   var typed_strings = document.getElementsByClassName('text-slider-items')[0].innerHTML;
    //     //  var typed = new Typed('.text-slider', {
    //     //     strings: typed_strings.split(','),
    //     //     typeSpeed: 80,
    //     //     loop: true,
    //     //     backDelay: 1100,
    //     //     backSpeed: 30
    //     //   });

    //   alert(typed_strings);
    // }
  
  }

  dash(){
    //this.authService.logout();
    console.log("***********")
    this.router.navigateByUrl('/admin/dashboard');
  }
  

}
