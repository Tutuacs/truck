import { Product, Truck } from '@prisma/client';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { AddRelationDto } from 'src/truck/dto/add-truck.dto';
export declare abstract class ProductAbstract {
    abstract createProduct(data: CreateProductDto): Promise<Product>;
    abstract findProduct(id: string): Promise<Product>;
    abstract listProduct(): Promise<Product[]>;
    abstract linkedProducts(id: string): Promise<{
        RelatedWith: {
            id: string;
            name: string;
            description: string;
            image: string;
            active: boolean;
            price: number;
            color: string;
            brandsId: string;
            promotion: boolean;
            comboId: string;
        }[];
    }>;
    abstract updateProduct(id: string, data: UpdateProductDto): Promise<Product>;
    abstract removeProduct(id: string): Promise<Product>;
    abstract linkTruck(relation: AddRelationDto, id: string): Promise<Truck[]>;
    abstract linkVariation(relation: AddRelationDto, id: string, type: string): Promise<{
        RelationWith: {
            id: string;
            name: string;
            description: string;
            image: string;
            active: boolean;
            price: number;
            color: string;
            brandsId: string;
            promotion: boolean;
            comboId: string;
        }[];
    }>;
    abstract unlinkTruck(relation: AddRelationDto, id: string): Promise<Truck[]>;
}
