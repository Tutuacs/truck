import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(data: CreateOrderDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, data: UpdateOrderDto): string;
    remove(id: string): string;
}
