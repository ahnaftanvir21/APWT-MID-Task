import { Injectable } from '@nestjs/common';
import { createCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from "multer";
import {extname} from "path"
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
    uploadCourseMaterial(id:string,file:Express.Multer.File){
        if(!file){
            return "File is Required";
        }
        return {message: 'Material uploaded sucessfully',CourseId:id,filename:file.filename,Path:`uploads/${file.filename}`}
    }
}
