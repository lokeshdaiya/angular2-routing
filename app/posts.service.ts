import {Injectable} from '@angular/core'
import {Http }  from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

;
 
@Injectable()
export class PostsService{
    constructor(private _http:Http){
    }

    getAllPosts() {
        return this._http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res=>res.json())
            .toPromise()
            ;
        // .subscribe((response) => {
        //         console.log(response);
        // },
        // error=>console.log(error),
        // ()=>console.log("Request done")
        // )
    }

}