import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private productsRepo: Repository<Products>,){}
    async create(dto:CreateProductDto):Promise<{message:string;data:Products}>{
        const prd = await this.productsRepo.create(dto);
        const p = await this.productsRepo.save(prd);
        let msg:string;
        if(p!= null){
            msg = 'product Created sucessfully';
        }
        else{
            msg = 'product Creation failed';
        }
        return {message:msg,data:p};
    }
    async findAll():Promise<{message:string;data:Products[]}>{
        const product = await this.productsRepo.find({
            order:{createAt:'DESC'},
        })
        let msg:string = 'No product Found'
        if(product != null){
            msg = 'Product Found';
        }
        return {message:msg,data:product};
    }
    async findOne(id:string):Promise<{message:string;data:Products}>{
        const product = await this.productsRepo.findOne(
            {
                where:{
                    id:id,
                }
            }
        );
        if(!product){
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        return {message:"Product found",data:product}
    }
    async update(id:string,dto:PartialUpdateProductDto):Promise<{message:string;data:Products}>{
        const uprd = (await this.productsRepo.update(id,dto)).affected;
        if(uprd != null && uprd > 0){
            const product = (await this.findOne(id)).data;
            return {message:"Product Updated",data:product};
        }
        else{
            throw new BadRequestException('user not found');
        }
    }
    async replace(id:string,dto:UpdateProductDto):Promise<{message:string;data:Products}>{
        const uprd = (await this.productsRepo.update(id,dto)).affected;
        if(uprd != null && uprd > 0){
            const product = (await this.findOne(id)).data;
            return {message:"Product Updated",data:product};
        }
        else{
            throw new BadRequestException('user not found');
        }
    }
    async remove(id:string):Promise<{message:string;id:string}>{
        const res = (await this.productsRepo.delete(id)).affected;
        if(res != null && res > 0){
            return {message:"product deleted",id:id};
        }
        else{
            throw new NotFoundException('product Not found');
        }
    }
    async findByCategory(category:string):Promise<{message:string;count:number,data:Products[] | null}>{
        const pro = await this.productsRepo.find({
            where:{
                category:category,
            }
        });
        return {message:`All product with category ${category}`,count:pro.length,data:pro}
    }
    async search(keyword:string):Promise<{message:string;count:number,data:Products[] | null}>{
        const pro = await this.productsRepo.find({
            where:{
                name:ILike(`%${keyword}%`)
            },
        });
        return {message:`All product with name ${keyword}`,count:pro.length,data:pro}
    }
    async toggleActive(id:string):Promise<{message:string,data:Products}>{
        const prd = (await this.findOne(id)).data;
        prd.isActive = !prd.isActive;
        const uprd = await this.productsRepo.save(prd);
        return {message:"product updated",data:uprd};
    }
}
