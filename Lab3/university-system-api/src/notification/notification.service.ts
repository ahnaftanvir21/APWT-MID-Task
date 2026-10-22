import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {
    constructor(
        @Inject(forwardRef(()=>EnrollmentService))
        private EnrollmentService:any,
    ){}
    sendNotification(studentName:string,message:string){
        return {message:"Notification Send Successsfully",Notification:[studentName,message]}
    }
    checkEnrollmentAndNotify(studentName:string,courseId:string){
        return {message:"Enrollment Checked",
            studentName:studentName,
            courseId,
            enrollments:this.EnrollmentService.getEnrollments()}
    }
}
