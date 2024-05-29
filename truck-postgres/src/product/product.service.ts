import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AddTruckDto } from 'src/truck/dto/add-truck.dto';
import { ProductAbstract } from './functions/product-abstract';

@Injectable()
export class ProductService {

  constructor(private readonly productFunctions: ProductAbstract) {}

  create(data: CreateProductDto) {
    return this.productFunctions.createProduct(data);
  }

  findAll() {
    return this.productFunctions.listProduct();
  }

  findOne(id: string) {
    return this.productFunctions.findProduct(id);
  }

  linkTruck(data: AddTruckDto,id: string) {
    return this.productFunctions.linkTruck(data, id);
  }

  unlinkTruck(data: AddTruckDto, id: string) {
    return this.productFunctions.unlinkTruck(data, id);
  }

  update(id: string, data: UpdateProductDto) {
    return this.productFunctions.updateProduct(id, data);
  }

  remove(id: string) {
    return this.productFunctions.removeProduct(id);
  }
}
