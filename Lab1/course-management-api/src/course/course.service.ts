import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourse(){
        return "Get All Courses - from Service";
    }
    getCourseById(id:string){
        return `Get Course with ID: ${id}- from Service`;
    }
}
