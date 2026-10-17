import { Controller, Get, Param,Post,Body, Put, Patch, Delete } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { createCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  getAllCourse(){
    return this.courseService.getAllCources();
  }
  @Get(':id')
  getCourseById(@Param('id') id:string){
      return this.courseService.getCourseById(id);
  }
  @Post()
  CreateNewCourse(@Body() Course:createCourseDto){
    return this.courseService.createCourse(Course);
  }
  @Put(':id')
  UpdateCourse(@Param('id')id:string,@Body() Course:UpdateCourseDto){
    return this.courseService.updateCourse(id,Course);
  }
  @Patch(':id')
  PatchCourse(@Param('id')id:string,@Body()Course:UpdateCourseDto){
    return this.courseService.patchCourse(id,Course);
  }
  @Delete(':id')
  deleteCourse(@Param('id')id:string){
    return this.courseService.deleteCourse(id);
  }
}
