import { ProductVerify } from './product-exist.filter';
import { ProductAbstract } from './product-abstract';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '@prisma/client';
import { UpdateProductDto } from '../dto/update-product.dto';
import { AddRelationDto } from 'src/truck/dto/add-truck.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductFunction extends ProductVerify implements ProductAbstract {
    constructor(prisma: PrismaService);
    createProduct(data: CreateProductDto): Promise<Product>;
    findProduct(id: string): Promise<Product>;
    listProduct(): Promise<Product[]>;
    updateProduct(id: string, data: UpdateProductDto): Promise<Product>;
    removeProduct(id: string): Promise<Product>;
    linkTruck(data: AddRelationDto, id: string): Promise<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }[]>;
    linkedProducts(id: string): Promise<{
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
    } & {
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
    }>;
    linkVariation(data: AddRelationDto, id: string, type: string): Promise<{
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
    } & {
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
    }>;
    unlinkTruck(data: AddRelationDto, id: string): Promise<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }[]>;
}
