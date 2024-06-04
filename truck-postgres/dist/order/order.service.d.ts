import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderService {
    create(data: CreateOrderDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, data: UpdateOrderDto): string;
    remove(id: string): string;
}
