import { Brands } from "@prisma/client";
import { CreateBrandDto } from "../dto/create-brand.dto";
import { UpdateBrandDto } from "../dto/update-brand.dto";

export abstract class BrandAbstract {
    abstract createBrand(data: CreateBrandDto): Promise<Brands>;
    abstract findBrand(id: string): Promise<Brands>;
    abstract listBrand(): Promise<Brands[]>;
    abstract updateBrand(id: string, data: UpdateBrandDto): Promise<Brands>;
    abstract removeBrand(id: string): Promise<Brands>;
}