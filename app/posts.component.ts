import { Component } from '@angular/core'
import { PostsService} from './posts.service'
@Component({
    selector:'post',
    template:`
    <div>
    <ul>
        <li *ngFor="let post of posts">
            {{post.title}}
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