import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AddTruckDto } from 'src/truck/dto/add-truck.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
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
    linkTruck(trucks: AddTruckDto, id: string): Promise<{
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
    unlinkTruck(trucks: AddTruckDto, id: string): Promise<{
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
