import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';

@Injectable()
export class EnrollmentService {
    constructor(
        private CourseService: CourseService,
        @Inject(forwardRef(()=>NotificationService))
        private notificationService:any,
    ){}
    enrollStudent(studentName:string,courseId:string){
        return {message:'Student enrolled successfully',
            student:studentName,
            course: this.CourseService.getCourseById(courseId),
            notification: this.notificationService.sendNotification(studentName,"Enrolled in Course"),
        }
    }
    getEnrollments(){
        return {message:"All enrollments fetched",data:[]}
    }
}
