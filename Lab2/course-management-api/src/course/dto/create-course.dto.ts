import { Type } from "class-transformer";
import { IsNotEmpty, IsString, Min,Max, IsNumber, IsOptional, Matches, } from "class-validator";

export class createCourseDto{
    @IsNotEmpty(
        {
            message: 'Course name, cannot be empty',
        }
    )
    @IsString()
    name:string;

    @IsNotEmpty()
    @Matches(/^[A-Z]{2,4}[0-9]{3}$/,{
        message:'Course code e.g. CS101',
    })
    @IsString()
    code:string;

    @IsNotEmpty(
        {
            message: 'Instructor name, cannot be empty',
        }
    )
    @IsString()
    instructor:string;
    @Type(()=>Number)
    @Min(1)
    @Max(6)
    @IsNumber()
    credits:number;
    @IsString()
    @IsOptional()
    descripton:string;
}