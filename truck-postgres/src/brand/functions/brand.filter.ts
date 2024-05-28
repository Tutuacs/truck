import { Injectable } from "@nestjs/common";
import { BrandAbstract } from "./brand-abstract";
import { CreateBrandDto } from "../dto/create-brand.dto";
import { Brands } from "@prisma/client";
import { UpdateBrandDto } from "../dto/update-brand.dto";
import { BrandVerify } from "./brand-exist.filter";

@Injectable()
export class BrandFunctions extends BrandVerify implements BrandAbstract {

    createBrand(data: CreateBrandDto): Promise<Brands> {
        return this.prisma.brands.create({data});
    }

    findBrand(id: string): Promise<Brands> {
        return this.prisma.brands.findUnique({where: {id}});
    }

    listBrand(): Promise<Brands[]> {
        return this.prisma.brands.findMany();
    }

    updateBrand(id: string, data: UpdateBrandDto): Promise<Brands> {
        return this.prisma.brands.update({where: {id}, data});
    }

    removeBrand(id: string): Promise<Brands> {
        return this.prisma.brands.delete({where: {id}});
    }

}