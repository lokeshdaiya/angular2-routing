import {Component,OnInit} from '@angular/core';
import {PostsService} from './posts.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector:'postdetail',
    template:`
        <div>
                <h2>Post Details for id {{currentPost.id}}</h2>
                <p>{{currentPost.title}}</p>
                <p>{{currentPost.body}}</p>
                <button class="success" (click)="back()">Go back</button>        
        </div>
        
    `,
    styles:[
        `
        div{
             box-shadow:5px 10px 10px 10px #888888;
             padding:50px;
             margin:10px;
             text-align:center;
             border-radius:10px;
             
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
    ],
    providers:[PostsService]
})

export class PostDetailComponent  implements OnInit  {
    postId:number;
    currentPost:any={};
    constructor(private _currentRoute:ActivatedRoute,private _postService:PostsService,private _location:Location){

    }
    
    ngOnInit(){
            this._postService.getAllPosts().then(
                response=>{
                    // get if from parameter
                    this._currentRoute.params.subscribe(
                        params=>{
                            this.postId = params["id"] 
                        }
                    )
                    // get post for id
                    response.forEach((post:any) => {
                        if(post.id == this.postId){
                            this.currentPost = post;
                        }
                    });
                }
            )
    }

    back(){
        this._location.back();
    }
}