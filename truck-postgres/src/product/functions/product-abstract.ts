import { Product, Truck } from "@prisma/client";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { AddTruckDto } from "src/truck/dto/add-truck.dto";

export abstract class ProductAbstract {
    abstract createProduct(data: CreateProductDto): Promise<Product>;
    abstract findProduct(id: string): Promise<Product>;
    abstract listProduct(): Promise<Product[]>;
    abstract updateProduct(id: string, data: UpdateProductDto): Promise<Product>;
    abstract removeProduct(id: string): Promise<Product>;
    abstract linkTruck(data: AddTruckDto, id: string): Promise<Truck[]>
    abstract unlinkTruck(data: AddTruckDto, id: string): Promise<Truck[]>
}