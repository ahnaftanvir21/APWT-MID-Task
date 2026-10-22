import { Inject, Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';

@Injectable()
export class EnrollmentService {
    constructor(
        private CourseService: CourseService
    ){}
    enrollStudent(studentName:string,courseId:string){
        return {message:'Student enrolled successfully',
            student:studentName,
            course: this.CourseService.getCourseById(courseId),
        }
    }
    getEnrollments(){
        return {message:"All enrollments fetched",data:[]}
    }
}
