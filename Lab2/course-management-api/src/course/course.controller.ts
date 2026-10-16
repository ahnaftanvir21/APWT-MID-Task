import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  getAllCourse(){
    return this.courseService.getAllCources();
  }
}
