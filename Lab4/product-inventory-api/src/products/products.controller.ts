import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { Products } from './entities/products.entity.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  async createNewProduct(@Body()dto:CreateProductDto):Promise<{message:string,data:Products}>{
    return await this.productsService.create(dto);
  }
  @Get()
  async GetAllProducts():Promise<{message:string;data:Products[]}>{
    return await this.productsService.findAll();
  }
  @Get('search')
  async searchProducts(@Query('keyword')keyword:string):Promise<{message:string;count:number,data:Products[] | null}>{
    return await this.productsService.search(keyword);
  }
  @Get('category/:cat')
  async getProductsByCategory(@Param('cat')cat:string):Promise<{message:string;count:number,data:Products[] | null}>{
    return await this.productsService.findByCategory(cat);
  }
  @Get(':id')
  async getProductById(@Param('id')id:string):Promise<{message:string;data:Products}>{
    return this.productsService.findOne(id);
  }
  @Patch(':id')
  async updateProductPartial(@Param('id')id:string,@Body()dto:PartialUpdateProductDto):Promise<{message:string;data:Products}>{
    return await this.productsService.update(id,dto);
  }
  @Put(':id')
  async updateProduct(@Param('id')id:string,@Body()dto:UpdateProductDto):Promise<{message:string;data:Products}>{
    return await this.productsService.replace(id,dto);
  }
  @Delete(':id')
  async deleteProduct(@Param('id')id:string):Promise<{message:string;id:string}>{
    return await this.productsService.remove(id);
  }
  @Patch(':id/toggle')
  async toggleProductstatus(@Param('id')id:string):Promise<{message:string,data:Products}>{
    return await this.productsService.toggleActive(id);
  }
}
