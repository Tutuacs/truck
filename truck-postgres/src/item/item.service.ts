import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemFunctions } from './functions/item.filter';

@Injectable()
export class ItemService {

  constructor(private readonly itemFunctions: ItemFunctions) { }

  create(data: CreateItemDto) {
    return this.itemFunctions.createItem(data);
  }

  findAll() {
    return this.itemFunctions.listItem();
  }

  async findOne(id: string) {
    await this.itemFunctions.existId(id);
    return this.itemFunctions.findItem(id);
  }

  update(id: string, data: UpdateItemDto) {
    return this.itemFunctions.updateItem(id, data);
  }

  remove(id: string) {
    return this.itemFunctions.removeItem(id);
  }
}
