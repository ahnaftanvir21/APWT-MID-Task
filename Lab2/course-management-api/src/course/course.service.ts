import { Injectable } from '@nestjs/common';
import { createCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Injectable()
export class CourseService {
    getAllCources(){
        return {message: 'All Courses fatched successfully', data: []};
    }
    getCourseById(id:string){
        return {message: "Course fetched Successfully",id};
    }
    createCourse(dto:createCourseDto){
        return {message: "Course Created sucessfully",data:dto};
    }
    updateCourse(id:string,dto:UpdateCourseDto){
        return {message: "Course updated Sucefully", id,data: dto};
    }
    patchCourse(id:string,dto:UpdateCourseDto){
        return {message: "Course patched successfully",id,data:dto};
    }
    deleteCourse(id: string){
        return {message: "Course deleted successfully",id};
    }
}
