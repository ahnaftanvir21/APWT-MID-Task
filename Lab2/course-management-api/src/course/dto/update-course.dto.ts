import { PartialType } from "@nestjs/mapped-types";
import { createCourseDto } from "./create-course.dto.js";

export class UpdateCourseDto extends PartialType(createCourseDto){}