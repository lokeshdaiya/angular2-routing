import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent }  from './app.component';
import { CourseComponent } from './course.component'
import {PostsComponent} from './posts.component';
import {CourseService} from './course.service'

const routes:Routes= [
  {path:'',component:CourseComponent},
  {path:'courses',component:CourseComponent},
  {path:'posts',component:PostsComponent}
]



@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(routes) ],//use forChild for nested child
  declarations: [ AppComponent, CourseComponent,PostsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [CourseService]
})
export class AppModule { }
