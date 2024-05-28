import { BrandAbstract } from "./brand-abstract";
import { CreateBrandDto } from "../dto/create-brand.dto";
import { Brands } from "@prisma/client";
import { UpdateBrandDto } from "../dto/update-brand.dto";
import { BrandVerify } from "./brand-exist.filter";
export declare class BrandFunctions extends BrandVerify implements BrandAbstract {
    createBrand(data: CreateBrandDto): Promise<Brands>;
    findBrand(id: string): Promise<Brands>;
    listBrand(): Promise<Brands[]>;
    updateBrand(id: string, data: UpdateBrandDto): Promise<Brands>;
    removeBrand(id: string): Promise<Brands>;
}
