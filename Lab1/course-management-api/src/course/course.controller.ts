import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  
  @Get()
  getAllCourses(){
    return this.courseService.getAllCourse();
  }
  @Get(':id')
  getCourseById(@Param('id') id:string){
    return this.courseService.getCourseById(id);
  }
  @Post()
  CreateCourse(){
    return this.courseService.CreateCourse();
  }
  @Put(':id')
  UpdateCourse(@Param('id')id:string){
    return this.courseService.UpdateCourse(id);
  }
  @Patch(':id')
  PatchCourse(@Param('id')id:string){
    return this.courseService.PatchCourse(id);
  }
  @Delete(':id')
  DeleteCourse(@Param('id')id:string){
    return this.courseService.DeleteCourse(id);
  }
}