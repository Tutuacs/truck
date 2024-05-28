import { ProductVerify } from "./product-exist.filter";
import { ProductAbstract } from "./product-abstract";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "@prisma/client";
import { UpdateProductDto } from "../dto/update-product.dto";
export declare class ProductFunction extends ProductVerify implements ProductAbstract {
    createProduct(data: CreateProductDto): Promise<Product>;
    findProduct(id: string): Promise<Product>;
    listProduct(): Promise<Product[]>;
    updateProduct(id: string, data: UpdateProductDto): Promise<Product>;
    removeProduct(id: string): Promise<Product>;
}
