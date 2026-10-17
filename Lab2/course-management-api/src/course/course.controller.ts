import { Controller, Get, Param,Post,Body, Put, Patch, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { createCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from "multer";
import {extname} from "path"

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

  @Post(':id/Upload')
  @UseInterceptors(FileInterceptor('file',{
    storage:diskStorage({
      destination: "./uploads",
      filename:(req,file,cb)=>{
        cb(null,`${file.originalname}`)

      }
    }),
    fileFilter:(req,file,cb) => {
      let allowed = /\.(jpg|jpeg|png|pdf)$/i;
      if(!allowed.test(extname(file.originalname))){
        return cb(null,false);
      }
      return cb(null,true);
    },
    limits:{fileSize: 2*1024*1024},
  }))
  uploadCourseMaterial(@Param('id')id:string,@UploadedFile() file:Express.Multer.File){
    return this.courseService.uploadCourseMaterial(id,file)
  }
}
