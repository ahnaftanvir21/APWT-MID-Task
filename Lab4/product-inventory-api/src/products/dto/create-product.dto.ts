import { Type } from "class-transformer";
import { IsBoolean, isIn, IsInt, isInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsString()
    @IsOptional()
    description:string;
    @IsNumber()
    @IsPositive()
    @Type(()=>Number)
    price:number;
    @IsOptional()
    @Min(0)
    @Type(()=>Number)
    @IsInt()
    stock:number;
    @IsString()
    @IsNotEmpty()
    category:string;
    @IsBoolean()
    @IsOptional()
    isActive:boolean;
}