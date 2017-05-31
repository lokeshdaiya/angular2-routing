export class CourseService{

    listOfCourse:string[] = ["AngularJs", "ReactJs","NodeJs"]

    getRandomCourse():string {
        return  this.listOfCourse[
                    Math.floor(
                        Math.random() * this.listOfCourse.length
                    )
                ]
    }

    getAllCourses():string[] {
        return this.listOfCourse;
    }

    insertNewCourse(newCourse:string):void {
        if(newCourse)
            this.listOfCourse.push(newCourse)
    }

}