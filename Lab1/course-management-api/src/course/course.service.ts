import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourse(){
        return "Get All Courses - from Service";
    }
    getCourseById(id:string){
        return `Get Course with ID: ${id}- from Service`;
    }
    CreateCourse(){
        return "Create Course - from Service";
    }
    UpdateCourse(id:string){
        return `Update Course ${id}- form Service`;
    }
}
