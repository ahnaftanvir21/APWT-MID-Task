import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

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
    @IsString()
    @IsNotEmpty()
    stock:number;
    @IsString()
    @IsNotEmpty()
    category:string;
    @IsBoolean()
    @IsOptional()
    isActive:boolean;
}