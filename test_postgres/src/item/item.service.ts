import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './Validation/create-item.dto';
import { UpdateItemDto } from './Validation/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateItemDto) {
    return this.prisma.createItem(data);
  }

  findAll() {
    return this.prisma.findAllItems();
  }

  findOne(id: string) {
    return this.prisma.findUniqItem(id);
  }

  update(id: string, data: UpdateItemDto) {
    return this.prisma.updateItem(id,data);
  }

  remove(id: string) {
    return this.prisma.removeItem(id);
  }
}
