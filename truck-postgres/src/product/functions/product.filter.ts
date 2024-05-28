import { ProductVerify } from "./product-exist.filter";
import { ProductAbstract } from "./product-abstract";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "@prisma/client";
import { UpdateProductDto } from "../dto/update-product.dto";

@Injectable()
export class ProductFunction extends ProductVerify implements ProductAbstract {
    createProduct(data: CreateProductDto): Promise<Product> {
        return this.prisma.product.create({ data });
    }

    findProduct(id: string): Promise<Product> {
        return this.prisma.product.findUnique({ where: { id } });
    }

    listProduct(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }

    updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
        return this.prisma.product.update({ where: { id }, data });
    }

    removeProduct(id: string): Promise<Product> {
        return this.prisma.product.delete({ where: { id } });
    }
}