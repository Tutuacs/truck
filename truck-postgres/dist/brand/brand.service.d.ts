import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandAbstract } from './functions/brand-abstract';
export declare class BrandService {
    private readonly brandFunctions;
    constructor(brandFunctions: BrandAbstract);
    create(data: CreateBrandDto): Promise<{
        id: string;
        name: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
    }>;
    update(id: string, data: UpdateBrandDto): Promise<{
        id: string;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
    }>;
}
