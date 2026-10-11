import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourse(){
        return "Get All Courses";
    }
    getCourseById(id:string){
        return `Get Course with ID: ${id}`;
    }
    CreateCourse(){
        return "Create Course";
    }
    UpdateCourse(id:string){
        return `Update Course ${id}`;
    }
    PatchCourse(id:string){
        return `Patch Course ${id}`;
    }
    DeleteCourse(id:string){
        return `Delete Course ${id}`
    }
}
