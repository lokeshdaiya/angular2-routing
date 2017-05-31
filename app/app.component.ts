import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav>
  <a routerLink="courses" routerLinkActive="active">Courses</a>|
  <a routerLink="posts" routerLinkActive="active">Posts</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles:[
    `
    nav{
      background-color:black;
      color:white;
      padding:10px;
    }
    nav a{
        text-decoration:none;
        padding:10px;
        outline:none;
        cursor:pointer;
        color:white;
    }
    .active{
      color:blue!important;
    }
    `
  ]
})
export class AppComponent  { name = 'Angular'; }
