import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AddTruckDto } from 'src/truck/dto/add-truck.dto';
import { ProductAbstract } from './functions/product-abstract';
export declare class ProductService {
    private readonly productFunctions;
    constructor(productFunctions: ProductAbstract);
    create(data: CreateProductDto): Promise<{
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
    findAll(): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
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
    linkTruck(data: AddTruckDto, id: string): Promise<{
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
    unlinkTruck(data: AddTruckDto, id: string): Promise<{
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
    update(id: string, data: UpdateProductDto): Promise<{
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
    remove(id: string): Promise<{
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
}
