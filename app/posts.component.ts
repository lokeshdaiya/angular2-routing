import { Component } from '@angular/core'
import { PostsService} from './posts.service'
@Component({
    selector:'post',
    template:`
    <div>
    <ul>
        <li *ngFor="let post of posts">
            <a [routerLink]="['/posts',post.id]" routerLinkActive="active">
                {{post.title}}
            </a>
        </li>
     </ul>   
    </div>
    `,
    providers:[PostsService]
})

export class PostsComponent {
    posts:any[]=[];
    constructor(private _posts:PostsService){
        this._posts.getAllPosts()
        .then(
            response=>{
                this.posts = response;
            }
        )
        .catch(error=>console.log(error))
    }
}