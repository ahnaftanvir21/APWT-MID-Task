import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCources(){
        return {message:'All Courses fetched',data:[]}
    }
    getCourseById(id:string){
        return {message:'Curse fetched',id}
    }
    createCourse(name:string,code:string){
        return {message:'Course created',data:{name,code}}
    }
}
