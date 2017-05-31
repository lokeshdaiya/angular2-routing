import { Component } from '@angular/core'
import { CourseService} from './course.service'
@Component({
    selector:'course',
    template:`
            <div>
                <input type="text" name="course" placeholder="Enter course name" [(ngModel)]="courseTobeAdded">
                <br />       
                <button class="success round" (click)="addNewCourse()">+Add Course</button>
                <button class="round" (click)="getCourse()">Get Course</button>
            </div>
            <div *ngIf="randomCourse.length!=0">
                <h1> {{randomCourse}}</h1>
            </div>
            <div>
                <h1 *ngFor="let c of courses">{{c}}</h1>
            </div>

    `,
    styles:[
        `
         div{
             box-shadow:5px 10px 10px 10px #888888;
             padding:100px;
             margin:10px;
             text-align:center;
             border-radius:10px;
             
         }
         input{
             margin:5px;
             padding:10px
         }

         button {
             padding:10px;
             border:none;
             outline:none;
             cursor:pointer;
         }
         button:focus{
             background-color:lightgreen;
         }

         .success{
             background-color:green;
             color:white;
         }

         .round {
             border-radius:10px
         }
         
        `
    ]
})

export class CourseComponent {
    courseTobeAdded:string="";
    randomCourse:string="";
    courses:any[]=[];
    constructor(private srv:CourseService){
        this.srv = new CourseService();
        this.courses = this.srv.getAllCourses();
    }
    addNewCourse() {
        this.srv.insertNewCourse(this.courseTobeAdded);
        this.courseTobeAdded= "";
    }

    getCourse() {
        this.randomCourse = this.srv.getRandomCourse();
    }
}