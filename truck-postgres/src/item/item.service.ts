import { Injectable } from '@nestjs/common';
import { CreateItemDto, CreateManyItemsDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemAbstract } from './functions/item-abstract';

@Injectable()
export class ItemService {

  constructor(private readonly itemFunctions: ItemAbstract) { }

  create(data: CreateItemDto) {
    return this.itemFunctions.createItem(data);
  }

  createMany(data: CreateManyItemsDto) {
    return this.itemFunctions.createManyItem(data);
  }

  findAll() {
    return this.itemFunctions.listItem();
  }

  async findOne(id: string) {
    await this.itemFunctions.exItemId(id);
    return this.itemFunctions.findItem(id);
  }

  update(id: string, data: UpdateItemDto) {
    return this.itemFunctions.updateItem(id, data);
  }

  remove(id: string) {
    return this.itemFunctions.removeItem(id);
  }
}
